import { ArrowLeft, Building, Target, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
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
              <Building className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">About Our Company</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">AI Stock Analysis Service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our AI Stock Analysis Service utilizes cutting-edge artificial intelligence technology to analyze
                stock market information and provide valuable insights to investors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We aim to democratize investment information through technology, creating an environment where
                more people can make informed investment decisions based on quality data.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-3">
                  "Making Investment Information More Accessible and Understandable Through AI"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to analyze complex stock market information using AI technology in an easy-to-understand
                  manner, helping investors make better investment decisions.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Service Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2">AI Analysis Technology</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Using advanced machine learning algorithms to extract valuable insights
                    from massive amounts of market data.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-2">User-Friendly Interface</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Intuitive interface designed for ease of use,
                    from beginners to professionals.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-2">Near Real-Time Data</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Market data updated in near real-time,
                    providing the latest information continuously.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-2">Free to Use</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Basic features are available for free.
                    Democratizing access to investment information.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Our Values</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Transparency</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We clearly explain AI analysis methods and limitations,
                      ensuring users understand the information correctly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Neutrality</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We do not recommend specific securities or solicit transactions.
                      We focus on providing objective information.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Continuous Improvement</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We sincerely listen to user feedback
                      and continuously work to improve our service.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Compliance</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We comply with all relevant laws and regulations, including securities laws,
                      and operate our services appropriately.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Company Information</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <dl className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Company Name</dt>
                    <dd className="text-gray-700">Star Merchant Services</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Representative</dt>
                    <dd className="text-gray-700">Moore Zinna</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Address</dt>
                    <dd className="text-gray-700">2335 Hayhurst Lane, Michigan 48226</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Phone</dt>
                    <dd className="text-gray-700">+1-313-759-8088</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Email</dt>
                    <dd className="text-gray-700">qddqdd9090@gmail.com</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Business</dt>
                    <dd className="text-gray-700">
                      Stock market information analysis and provision<br />
                      Development and operation of AI-powered investment information services
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Important Notice</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-amber-900 font-semibold mb-2">Not a Registered Investment Adviser</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  This service is not a registered investment adviser, broker-dealer, or financial institution
                  under applicable securities laws. We do not provide investment advisory services, discretionary
                  investment management, or financial intermediary services. Information provided by this service
                  should be used for reference purposes only.
                </p>
              </div>
            </section>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700 mb-3">
                For questions, feedback, or inquiries about our service,
                please contact us through our contact form.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Go to Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
