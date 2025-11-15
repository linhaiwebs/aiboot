import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 15, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 1 - Application</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                These Terms of Service establish the conditions for using the AI Stock Analysis Service (hereinafter "the Service")
                between all users of the Service (hereinafter "Users") and Star Merchant Services (hereinafter "the Company").
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using the Service, Users are deemed to have agreed to all provisions of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 2 - Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Service is an information provision service that analyzes stock market information using AI technology
                and provides it to Users.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Service provides the following features:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Display of basic stock information</li>
                <li>Stock price trend charts</li>
                <li>AI-generated stock analysis reports</li>
                <li>Market data aggregation and statistical information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 3 - Important Notice</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-gray-800 font-semibold mb-2">Critical Information</p>
                <p className="text-gray-700 leading-relaxed">
                  The Service is for informational purposes only and does not constitute investment advice or solicitation.
                  Information provided by the Service is offered as reference for investment decisions and does not guarantee investment results.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Users shall make investment decisions at their own responsibility, and the Company assumes no liability
                for damages arising from use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 4 - Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Users shall not engage in the following activities when using the Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Acts that violate laws or public order and morals</li>
                <li>Acts related to criminal activities</li>
                <li>Acts that interfere with the operation of the Service</li>
                <li>Acts that infringe upon the rights of other users or third parties</li>
                <li>Registration of false information</li>
                <li>Commercial use of Service information</li>
                <li>Unauthorized access or attempts thereof</li>
                <li>Acts that place excessive load on the Service system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 5 - Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Copyrights and other intellectual property rights in content, text, images, programs, and other materials
                included in the Service belong to the Company or parties who have licensed them to the Company.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users may not reproduce, republish, distribute, or modify these materials without prior written consent from the Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 6 - Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Company makes no warranties regarding the content, quality, accuracy, completeness, or usefulness of the Service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Company assumes no liability for damages incurred by Users from use of the Service, except in cases
                of intentional misconduct or gross negligence by the Company.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Company assumes no liability for delays, interruptions, suspensions, data loss, or other issues
                related to Service provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 7 - Service Changes and Suspension</h2>
              <p className="text-gray-700 leading-relaxed">
                The Company may change the content of the Service or suspend provision of the Service without prior notice to Users.
                The Company assumes no liability for damages incurred by Users as a result.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 8 - Personal Information</h2>
              <p className="text-gray-700 leading-relaxed">
                The Company will handle Users' personal information appropriately in accordance with the Privacy Policy
                separately established by the Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 9 - Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                The Company may change these Terms as necessary. Modified Terms shall become effective from the time they are posted on the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Article 10 - Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with the laws of the United States.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In the event of any disputes arising from the Service, the parties agree to the exclusive jurisdiction
                of the courts located in Michigan, United States.
              </p>
            </section>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you have any questions about these Terms, please contact us:
              </p>
              <p className="text-sm text-gray-700">
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
