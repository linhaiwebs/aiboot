import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-amber-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Disclaimer</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 15, 2025</p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
              <p className="text-red-900 font-bold mb-2">Important Notice</p>
              <p className="text-red-800 leading-relaxed">
                This Service is for informational purposes only and does not constitute investment advice or solicitation.
                All investment decisions are your own responsibility.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Nature of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The AI Stock Analysis Service is a stock information provision and analysis tool utilizing AI technology.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Service does NOT constitute:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Investment advisory services</li>
                <li>Discretionary investment management</li>
                <li>Financial intermediary services</li>
                <li>Securities transaction solicitation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                The Service operator is not a registered investment adviser, broker-dealer, or financial institution.
                We are not registered under applicable securities laws and cannot provide individual investment advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information Accuracy</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Information provided by the Service is obtained from sources believed to be reliable, but we make no
                warranties regarding its accuracy, completeness, timeliness, or usefulness.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                AI analysis results are based on historical data and statistical methods and do not guarantee future
                investment performance. Analysis results may differ significantly from actual outcomes due to changes
                in market conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Investment Risks</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-amber-900 font-semibold mb-2">Stock Investment Risks</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Stock investing involves risks including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Price Risk:</strong> Stock prices fluctuate and may fall below investment principal</li>
                  <li><strong>Credit Risk:</strong> Changes in issuer's financial condition may significantly decrease investment value</li>
                  <li><strong>Liquidity Risk:</strong> You may be unable to buy or sell at desired prices or quantities</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                The Company assumes no liability for any losses or damages arising from use of the Service.
                All investment decisions and consequences thereof are the user's sole responsibility.
              </p>
            </section>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Contact Information</h3>
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
