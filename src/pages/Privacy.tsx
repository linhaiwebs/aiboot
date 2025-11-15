import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
              <Shield className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 15, 2025</p>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Privacy Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                Star Merchant Services ("the Company"), operator of the AI Stock Analysis Service ("the Service"),
                recognizes the importance of users' personal information and is committed to handling and protecting
                it appropriately in compliance with applicable privacy laws.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                In providing the Service, we may collect the following information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access log information (IP address, browser type, access date and time, etc.)</li>
                <li>Information collected using cookies and similar technologies</li>
                <li>Service usage history (stocks viewed, analyses performed, etc.)</li>
                <li>Information provided during inquiries (email address, name, etc.)</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Collected information is used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provision, maintenance, and improvement of the Service</li>
                <li>Response to user inquiries</li>
                <li>Analysis of service usage and creation of statistical data</li>
                <li>Prevention of unauthorized use and security assurance</li>
                <li>Response to violations of Terms of Service</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, rent, or share personal information with third parties except as required by law
                or with user consent.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>
            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700">
                For questions about this Privacy Policy, please contact us at qddqdd9090@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
