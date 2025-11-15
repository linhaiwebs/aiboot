import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Service',
      questions: [
        { q: 'What is the AI Stock Analysis Service?', a: 'An AI-powered service that analyzes stock market information and provides insights as reference for investment decisions.' },
        { q: 'Is the service free?', a: 'Basic stock information viewing and AI analysis features are available for free.' },
        { q: 'Is registration required?', a: 'Currently, no registration is required to use the service.' }
      ]
    },
    {
      category: 'AI Analysis',
      questions: [
        { q: 'How accurate is the AI analysis?', a: 'AI analysis is based on historical data and statistical methods but does not guarantee future performance. Use it as reference information only.' },
        { q: 'Can I invest based on AI analysis results?', a: 'AI analysis is for reference only. Always make investment decisions based on your own research and responsibility.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <HelpCircle className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">FAQ</h1>
          </div>
          <div className="space-y-6">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h2>
                {category.questions.map((faq, qIdx) => (
                  <div key={qIdx} className="mb-4 border rounded-lg">
                    <button onClick={() => setOpenIndex(openIndex === qIdx ? null : qIdx)} className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50">
                      <span className="font-semibold text-gray-900">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === qIdx ? 'rotate-180' : ''}`} />
                    </button>
                    {openIndex === qIdx && (
                      <div className="px-4 py-3 bg-gray-50 border-t">
                        <p className="text-gray-700">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
