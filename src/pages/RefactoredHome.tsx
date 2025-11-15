import { useState, useEffect, useRef } from 'react';
import VideoBackground from '../components/VideoBackground';
import RobotHeaderAnimation from '../components/RobotHeaderAnimation';
import StockCodeInput from '../components/StockCodeInput';
import DiagnosisButton from '../components/DiagnosisButton';
import DiagnosisLoadingOverlay from '../components/DiagnosisLoadingOverlay';
import DiagnosisModal from '../components/DiagnosisModal';
import { DiagnosisState } from '../types/diagnosis';
import { useUrlParams } from '../hooks/useUrlParams';
import { apiClient } from '../lib/apiClient';
import { userTracking } from '../lib/userTracking';
import { trackConversion, trackDiagnosisButtonClick, trackConversionButtonClick } from '../lib/googleTracking';
import { generateDiagnosisReport } from '../lib/reportGenerator';

export default function RefactoredHome() {
  const urlParams = useUrlParams();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>('initial');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [diagnosisStartTime, setDiagnosisStartTime] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState<boolean>(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (urlParams.code) {
      setInputValue(urlParams.code);
    }
  }, [urlParams.code]);

  useEffect(() => {
    const trackPageVisit = async () => {
      await userTracking.trackPageLoad({
        stockCode: inputValue,
        stockName: inputValue,
        urlParams: {
          src: urlParams.src || '',
          gclid: urlParams.gclid || '',
          racText: urlParams.racText || '',
          code: urlParams.code || ''
        }
      });
    };

    trackPageVisit();
  }, [inputValue, urlParams]);


  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const runDiagnosis = async () => {
    if (diagnosisState !== 'initial') return;
    if (!inputValue) return;

    trackDiagnosisButtonClick();

    setDiagnosisState('connecting');
    setDiagnosisStartTime(Date.now());
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingOverlay(true);

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 85) {
          return prev + Math.random() * 15;
        } else if (prev < 95) {
          return prev + Math.random() * 2;
        }
        return prev;
      });
    }, 100);

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/gemini/diagnosis`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 50000);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: inputValue,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      if (!response.ok) {
        throw new Error('AI diagnosis failed');
      }

      setDiagnosisState('processing');

      const contentType = response.headers.get('content-type');

      if (contentType?.includes('text/event-stream')) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let fullAnalysis = '';
        let firstChunk = true;

        if (!reader) {
          throw new Error('Failed to read stream');
        }

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const text = decoder.decode(value, { stream: true });
          const lines = text.split('\n').filter(line => line.trim() !== '');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);

              try {
                const parsed = JSON.parse(data);

                if (parsed.error) {
                  throw new Error(parsed.error);
                }

                if (parsed.content) {
                  fullAnalysis += parsed.content;

                  if (firstChunk && fullAnalysis.trim().length > 0) {
                    setLoadingProgress(100);
                    setTimeout(() => {
                      setShowLoadingOverlay(false);
                      setDiagnosisState('streaming');
                    }, 600);
                    firstChunk = false;
                  }

                  setAnalysisResult(fullAnalysis);
                }

                if (parsed.done) {
                  setDiagnosisState('results');

                  const durationMs = Date.now() - diagnosisStartTime;
                  await userTracking.trackDiagnosisClick({
                    stockCode: inputValue,
                    stockName: inputValue,
                    durationMs: durationMs
                  });
                }
              } catch (parseError) {
                console.error('Error parsing SSE data:', parseError);
              }
            }
          }
        }
      } else {
        const result = await response.json();

        if (!result.analysis || result.analysis.trim() === '') {
          throw new Error('Diagnosis results could not be generated');
        }

        setAnalysisResult(result.analysis);
        setDiagnosisState('results');

        const durationMs = Date.now() - diagnosisStartTime;
        await userTracking.trackDiagnosisClick({
          stockCode: inputValue,
          stockName: inputValue,
          durationMs: durationMs
        });
      }
    } catch (err) {
      console.error('Diagnosis error:', err);
      let errorMessage = 'An error occurred during diagnosis';
      let errorDetails = '';

      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = 'Request timed out';
          errorDetails = 'The connection took too long. Please try again.';
        } else {
          errorMessage = err.message;

          try {
            const errorResponse = JSON.parse(err.message);
            if (errorResponse.details) {
              errorDetails = errorResponse.details;
            }
          } catch {
            errorDetails = err.message;
          }
        }
      }

      setError(`${errorMessage}${errorDetails ? `\nDetails: ${errorDetails}` : ''}`);
      setDiagnosisState('error');
      setShowLoadingOverlay(false);
      setLoadingProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  };

  const handleWhatsAppConversion = async () => {
    try {
      trackConversionButtonClick();

      const response = await apiClient.get('/api/line-redirects/select');

      if (!response.ok) {
        console.error('Failed to get WhatsApp redirect link');
        alert('Failed to get WhatsApp link. Please try again later.');
        return;
      }

      const data = await response.json();

      if (!data.success || !data.link) {
        console.error('No active WhatsApp redirect links available');
        alert('No WhatsApp links currently available.');
        return;
      }

      const whatsappUrl = data.link.redirect_url;

      trackConversion();

      await userTracking.trackConversion({
        gclid: urlParams.gclid
      });

      console.log('WhatsApp conversion tracked successfully');

      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 300);
    } catch (error) {
      console.error('WhatsApp conversion error:', error);
      alert('Operation failed. Please try again later.');
    }
  };

  const handleReportDownload = async () => {
    try {
      const response = await apiClient.get('/api/line-redirects/select');
      let whatsappRedirectUrl = '';

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.link) {
          whatsappRedirectUrl = data.link.redirect_url;
        }
      }

      await generateDiagnosisReport({
        stockCode: inputValue,
        stockName: inputValue,
        analysis: analysisResult,
        whatsappRedirectUrl: whatsappRedirectUrl
      });

      await userTracking.trackEvent({
        sessionId: sessionStorage.getItem('sessionId') || '',
        eventType: 'report_download',
        stockCode: inputValue,
        stockName: inputValue,
        eventData: {
          reportFormat: 'docx',
          timestamp: new Date().toISOString()
        }
      });

      console.log('Report download tracked successfully');
    } catch (error) {
      console.error('Report download error:', error);
      alert('Failed to download report. Please try again.');
    }
  };

  const closeModal = () => {
    setDiagnosisState('initial');
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingOverlay(false);
    setDiagnosisStartTime(0);
    setError(null);

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <div className="min-h-screen relative">
      <VideoBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 space-y-8 md:space-y-12">
          <div className="flex flex-col items-center space-y-8 md:space-y-10">
            <RobotHeaderAnimation />

            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-accent via-orange-light to-orange-accent bg-clip-text text-transparent leading-tight">
                2025 Most Powerful AI
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Stock Price Prediction
              </h2>

              <div className="mt-8 space-y-3">
                <p className="text-lg md:text-xl text-white/90">
                  Prediction Accuracy Reaches <span className="text-orange-accent font-bold text-2xl md:text-3xl animate-number-pulse">99.8%</span>
                </p>

                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Enter your stock code or interested stock code below, and the AI system will complete the analysis within 1.5 seconds. Currently, <span className="text-orange-accent font-bold underline decoration-2 underline-offset-4">46,863</span> people are viewing the complete report for free!
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl space-y-6">
            <StockCodeInput
              value={inputValue}
              onChange={setInputValue}
            />

            {error && diagnosisState !== 'error' && (
              <div className="bg-red-500/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4 text-center">
                <p className="text-white font-semibold">{error}</p>
              </div>
            )}

            {inputValue && !loading && diagnosisState === 'initial' && (
              <DiagnosisButton onClick={runDiagnosis} />
            )}

            {diagnosisState === 'error' && (
              <div className="bg-red-900/80 backdrop-blur-sm border-2 border-red-500 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-red-300 mb-3">Diagnosis Error</h3>
                <p className="text-red-200 font-semibold mb-4 whitespace-pre-line">{error}</p>
                <button
                  onClick={() => {
                    setDiagnosisState('initial');
                    setError(null);
                  }}
                  className="px-6 py-3 bg-cyan-gradient text-white font-bold rounded-lg hover:bg-cyan-gradient-hover transition-all shadow-lg shadow-cyan-glow"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>

        <DiagnosisLoadingOverlay
          isVisible={showLoadingOverlay}
          progress={loadingProgress}
          onComplete={() => setShowLoadingOverlay(false)}
        />

        <DiagnosisModal
          isOpen={diagnosisState === 'streaming' || diagnosisState === 'results'}
          onClose={closeModal}
          analysis={analysisResult}
          stockCode={inputValue}
          stockName={inputValue}
          onWhatsAppConversion={handleWhatsAppConversion}
          onReportDownload={handleReportDownload}
          isStreaming={diagnosisState === 'streaming'}
          isConnecting={diagnosisState === 'connecting'}
        />
      </div>
    </div>
  );
}
