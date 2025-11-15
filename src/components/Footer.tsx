import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, FileText, Mail, ExternalLink, ChevronLeft, ChevronRight, Info, Phone, Building } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentSlide, setCurrentSlide] = useState(0);

  const legalDisclosures = [
    {
      title: 'Service Nature',
      content: 'This service is an AI-powered stock information and analysis tool.',
      highlight: 'We are not a registered investment adviser, broker-dealer, or financial institution. We do not provide personalized investment advice or recommend specific securities.',
      borderColor: 'border-amber-500'
    },
    {
      title: 'Investment Risk Warning',
      content: 'Stock investing involves risks including price volatility, credit risk, liquidity risk, and',
      highlight: 'the potential loss of principal.',
      extra: 'Past performance does not guarantee future results. Market conditions can change unexpectedly, resulting in unforeseen losses.',
      borderColor: 'border-red-500'
    },
    {
      title: 'Information Accuracy',
      content: 'Information provided is obtained from sources believed to be reliable, but we do not guarantee its accuracy, completeness, or timeliness. AI analysis results are provided as reference information and should not be used as the sole basis for investment decisions.',
      highlight: '',
      borderColor: 'border-blue-500'
    },
    {
      title: 'Investment Decision Responsibility',
      content: '',
      highlight: 'All investment decisions are your own responsibility.',
      extra: 'We are not liable for any losses resulting from use of this service. Please consult with a licensed financial advisor before making investment decisions.',
      borderColor: 'border-slate-500'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % legalDisclosures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + legalDisclosures.length) % legalDisclosures.length);
  };

  return (
    <footer className="relative z-20 border-t border-white/10 mt-12 bg-navy-secondary/50 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Legal Disclosure Section - Desktop */}
        <div className="hidden md:block bg-white/90 backdrop-blur-sm border-2 border-amber-300 rounded-lg p-6 mb-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
              <Shield className="w-6 h-6 text-amber-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Important Disclosures
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-slate-800">
                <div className="bg-white/70 rounded p-3 border-l-4 border-amber-500">
                  <p className="font-bold text-amber-900 mb-2">Service Nature</p>
                  <p>
                    This service is an AI-powered stock information and analysis tool.
                    <strong className="text-red-700"> We are not a registered investment adviser, broker-dealer, or financial institution. We do not provide personalized investment advice or recommend specific securities.</strong>
                  </p>
                </div>

                <div className="bg-white/70 rounded p-3 border-l-4 border-red-500">
                  <p className="font-bold text-red-900 mb-2">Investment Risk Warning</p>
                  <p>
                    Stock investing involves risks including price volatility, credit risk, liquidity risk, and
                    <strong className="text-red-700"> the potential loss of principal.</strong>
                    Past performance does not guarantee future results.
                    Market conditions can change unexpectedly, resulting in unforeseen losses.
                  </p>
                </div>

                <div className="bg-white/70 rounded p-3 border-l-4 border-blue-500">
                  <p className="font-bold text-blue-900 mb-2">Information Accuracy</p>
                  <p>
                    Information provided is obtained from sources believed to be reliable, but
                    we do not guarantee its accuracy, completeness, or timeliness.
                    AI analysis results are provided as reference information and should not be used as the sole basis for investment decisions.
                  </p>
                </div>

                <div className="bg-white/70 rounded p-3 border-l-4 border-slate-500">
                  <p className="font-bold text-slate-900 mb-2">Investment Decision Responsibility</p>
                  <p>
                    <strong className="text-red-700">All investment decisions are your own responsibility.</strong>
                    We are not liable for any losses resulting from use of this service.
                    Please consult with a licensed financial advisor before making investment decisions.
                  </p>
                </div>

                <div className="bg-slate-100 rounded p-3 mt-4">
                  <p className="font-bold text-slate-900 mb-1">Registration Status</p>
                  <p className="text-xs text-slate-700">
                    This service is not a registered investment adviser under the Investment Advisers Act of 1940.
                    Information provided is for educational purposes only and does not constitute personalized investment advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclosure Section - Mobile Carousel */}
        <div className="md:hidden bg-white/90 backdrop-blur-sm border-2 border-amber-300 rounded-lg p-4 mb-6 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-amber-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
              <Scale className="w-4 h-4" />
              Important Disclosures
            </h3>
          </div>

          <div className="relative">
            <div className={`bg-white/70 rounded p-3 border-l-4 ${legalDisclosures[currentSlide].borderColor} min-h-[180px]`}>
              <p className="font-bold text-amber-900 mb-2 text-sm">{legalDisclosures[currentSlide].title}</p>
              <div className="text-xs leading-relaxed text-slate-800">
                {legalDisclosures[currentSlide].content && (
                  <p className="mb-2">{legalDisclosures[currentSlide].content}</p>
                )}
                {legalDisclosures[currentSlide].highlight && (
                  <p className="mb-2">
                    <strong className="text-red-700">{legalDisclosures[currentSlide].highlight}</strong>
                  </p>
                )}
                {legalDisclosures[currentSlide].extra && (
                  <p>{legalDisclosures[currentSlide].extra}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <button
                onClick={prevSlide}
                className="p-2 bg-white rounded-full shadow-md hover:bg-amber-100 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-amber-700" />
              </button>

              <div className="flex gap-1.5">
                {legalDisclosures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-amber-600 w-6' : 'bg-amber-300'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 bg-white rounded-full shadow-md hover:bg-amber-100 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-amber-700" />
              </button>
            </div>
          </div>

          <div className="bg-slate-100 rounded p-2.5 mt-3">
            <p className="font-bold text-slate-900 mb-1 text-xs">Registration Status</p>
            <p className="text-[10px] leading-relaxed text-slate-700">
              This service is not a registered investment adviser under the Investment Advisers Act of 1940.
              Information provided is for educational purposes only and does not constitute personalized investment advice.
            </p>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="border-t-2 border-white/30 pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
            {/* Legal Documents */}
            <div>
              <h4 className="font-bold text-white drop-shadow-lg mb-3 flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                Legal
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Terms of Service <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Privacy Policy <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/disclaimer"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Disclaimer <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/risk-disclosure"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Risk Disclosure <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white drop-shadow-lg mb-3 flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                Contact
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Contact Form <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    FAQ <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Support <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li className="flex items-center gap-1 text-white drop-shadow-lg">
                  <Phone className="w-3 h-3" />
                  <span>080-3824-1560</span>
                </li>
                <li className="text-white/80 drop-shadow-lg text-xs">
                  Hours: Mon-Fri 9:00-18:00 JST
                </li>
              </ul>
            </div>

            {/* Service Information */}
            <div>
              <h4 className="font-bold text-white drop-shadow-lg mb-3 flex items-center gap-2 text-sm">
                <Info className="w-4 h-4" />
                Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white drop-shadow-lg">
                <li>Ricotte LLC</li>
                <li>AI Stock Analysis</li>
                <li>Real-Time Market Data</li>
                <li>Technical Analysis</li>
                <li>Stock Screening</li>
                <li>Data Source: Public Markets</li>
              </ul>
            </div>

            {/* Company Information */}
            <div>
              <h4 className="font-bold text-white drop-shadow-lg mb-3 flex items-center gap-2 text-sm">
                <Building className="w-4 h-4" />
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    About <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Team <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Careers <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="text-white/80 hover:text-cyan-primary hover:underline transition-colors flex items-center gap-1"
                  >
                    Press <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/30 pt-4 text-center">
            <p className="text-xs sm:text-sm text-white drop-shadow-lg mb-2 font-medium">
              &copy; {currentYear} Ricotte LLC. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-white/90 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
              Information provided on this site is not intended as investment advice or a recommendation to buy or sell securities.
              All investment decisions are your sole responsibility.
              While we strive for accuracy, we do not guarantee the accuracy, safety, or usefulness of the information provided.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
