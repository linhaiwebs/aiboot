import { Link } from 'react-router-dom';
import { Shield, FileText, Mail, ExternalLink, Info, Phone, Building } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-white/10 mt-12 bg-navy-secondary/50 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Disclaimer Section */}
        <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-lg p-4 sm:p-6 mb-8 shadow-xl">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-2 sm:mb-3">Disclaimer</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                This platform provides AI-powered stock market information and analysis for educational purposes only. We are not a registered investment adviser, broker-dealer, or financial institution. The information presented does not constitute investment advice, financial advice, trading advice, or any other type of advice. All content is provided for informational purposes and should not be relied upon for making investment decisions. Users are solely responsible for their own investment decisions and should consult with qualified financial professionals before making any investment. Past performance does not guarantee future results.
              </p>
            </div>
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
