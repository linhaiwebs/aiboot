import { useEffect, useState } from 'react';

interface DiagnosisLoadingOverlayProps {
  isVisible: boolean;
  progress: number;
  onComplete?: () => void;
}

export default function DiagnosisLoadingOverlay({
  isVisible,
  progress,
  onComplete
}: DiagnosisLoadingOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress >= 100 && isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setIsExiting(false);
    }
  }, [progress, isVisible, onComplete]);

  useEffect(() => {
    if (isVisible) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.removeAttribute('data-modal-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isVisible]);

  if (!isVisible && !isExiting) return null;

  return (
    <div
      className={`fixed inset-0 z-[9997] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ touchAction: 'none' }}
    >
      <div className={`w-full max-w-2xl transition-transform duration-500 ${
        isExiting ? 'scale-95' : 'scale-100'
      }`}>
        <div className="bg-gradient-to-br from-[#1a0f3e] via-[#2d1b5e] to-[#1a0f3e] border-2 border-orange-500/50 rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2 text-center">Running AI Diagnosis</h3>
            <p className="text-sm text-orange-300 text-center">Analyzing market data...</p>
          </div>

          <div className="relative w-full h-3 bg-gray-800/50 rounded-full overflow-hidden mb-3 border border-orange-500/30">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out shadow-lg shadow-orange-500/50"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="mb-6 text-center">
            <span className="text-sm font-semibold text-orange-400">
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>

          <div className="bg-gray-900/40 border-2 border-orange-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="space-y-3 text-sm">
              <p className="text-white font-semibold text-center text-base">
                📊 Data is being deeply analyzed by AI
              </p>
              <p className="text-orange-200 text-center">
                Please wait a moment
              </p>
              <div className="pt-3 border-t border-orange-500/30">
                <p className="text-xs text-gray-300 text-center leading-relaxed">
                  This analysis uses the latest AI technology to comprehensively evaluate financial indicators, industry trends, and market patterns. All data is sourced from publicly available market information to ensure accuracy and validity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
