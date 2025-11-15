import { ArrowLeft, HelpCircle, Book, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Support() {
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
            <h1 className="text-3xl font-bold text-gray-900">Support</h1>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Welcome to the AI Stock Analysis Service support page.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/faq" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-200 p-3 rounded-lg">
                  <Book className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">FAQ</h3>
                  <p className="text-sm text-gray-700">Frequently asked questions and answers.</p>
                </div>
              </div>
            </Link>
            <Link to="/contact" className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-green-200 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-sm text-gray-700">Get in touch with our team.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
