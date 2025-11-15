import { ArrowLeft, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Press() {
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
              <Newspaper className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Press & Media</h1>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              For press inquiries about Star Merchant Services and our AI Stock Analysis Service,
              please contact us.
            </p>
            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Media Contact</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Star Merchant Services</strong><br />
                2335 Hayhurst Lane, Michigan 48226<br />
                Phone: +1-313-759-8088<br />
                Email: qddqdd9090@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
