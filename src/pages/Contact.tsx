import { ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
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
              <Mail className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Thank you for using our AI Stock Analysis Service.
              Please feel free to contact us with questions, requests, or bug reports.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h2>
              <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-sm text-gray-600">
                    Closed on weekends and holidays<br />
                    Response time may vary depending on inquiry volume
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Form</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Please select</option>
                    <option value="service">Service Information</option>
                    <option value="technical">Technical Issues</option>
                    <option value="billing">Billing Questions</option>
                    <option value="account">Account Questions</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                      <span className="text-red-600"> *</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Submit
                </button>
              </form>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> This form is currently a demo version. Actual submission functionality is not implemented.
                  In production, appropriate backend processing must be implemented.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                For common questions, please also refer to our
                <a href="/faq" className="text-blue-600 hover:underline font-semibold"> FAQ page</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Investment Advice Disclaimer</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-900 font-semibold mb-2">Important Notice</p>
                <p className="text-red-800 leading-relaxed">
                  We are not a registered investment adviser and cannot provide individual investment advice.
                  For specific investment consultation, please contact a licensed securities dealer or financial institution.
                </p>
              </div>
            </section>

            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Star Merchant Services
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Representative:</strong> Moore Zinna
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Phone:</strong> +1-313-759-8088
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Email:</strong> qddqdd9090@gmail.com
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Address:</strong> 2335 Hayhurst Lane, Michigan 48226
              </p>
              <p className="text-sm text-gray-700">
                <strong>Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
