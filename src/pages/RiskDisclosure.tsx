import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RiskDisclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Risk Disclosure</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 15, 2025</p>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-red-900 mb-3">Important Notice</h2>
              <p className="text-red-800 leading-relaxed mb-3">
                Stock investing involves risks that may result in loss of principal.
                This document explains the main risks associated with stock investing.
              </p>
              <p className="text-red-800 font-bold leading-relaxed">
                Before investing, please fully understand these risks and invest based on your own judgment and responsibility.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Price Risk</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Stock prices fluctuate due to various factors including domestic and international political/economic
                conditions, company performance, and market supply and demand.
              </p>
              <div className="bg-gray-50 rounded p-4 mb-3">
                <p className="font-semibold text-gray-900 mb-2">Main volatility factors:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Changes in company performance</li>
                  <li>Management changes or policy shifts</li>
                  <li>Industry trends and competitive environment changes</li>
                  <li>Interest rate and exchange rate fluctuations</li>
                  <li>Economic indicator releases</li>
                  <li>Political events and policy changes</li>
                  <li>Natural disasters and pandemics</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Credit Risk</h2>
              <p className="text-gray-700 leading-relaxed">
                If an issuing company's financial condition deteriorates, stock value may significantly decrease
                or become worthless in case of bankruptcy. Credit ratings can also decline, causing price drops.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Liquidity Risk</h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on market conditions and trading volume, you may be unable to trade at desired prices
                or quantities, or trading may not be possible at all.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. No Performance Guarantee</h2>
              <p className="text-gray-700 leading-relaxed">
                Past performance does not guarantee future results. Historical returns and AI analysis results
                are for reference only and do not guarantee future investment performance.
              </p>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8">
              <h3 className="font-bold text-amber-900 mb-3">Investment Precautions</h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• Invest only amounts you can afford to lose</li>
                <li>• Diversify your investments to reduce risk</li>
                <li>• Make decisions based on your own research and judgment</li>
                <li>• Consult with licensed financial professionals when necessary</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
