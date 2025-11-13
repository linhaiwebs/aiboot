export default function AIAnalysisBanner() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-2xl overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-8" viewBox="0 0 1000 50" preserveAspectRatio="none">
          <polygon points="0,50 500,0 1000,50" fill="white" opacity="0.3" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-full h-8" viewBox="0 0 1000 50" preserveAspectRatio="none">
          <polygon points="0,0 500,50 1000,0" fill="white" opacity="0.3" />
        </svg>

        <div className="px-8 py-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AIによる無料分析
            </span>
          </h2>

          <p className="text-lg md:text-xl text-center text-gray-900 leading-relaxed">
            人工知能による分析・
            <span className="text-red-600 font-bold">予測を活用し</span>
            、迅速かつ効率的に株式投資を実現
          </p>

          <p className="text-lg md:text-xl text-center text-gray-900 leading-relaxed">
            AIによる株式情報の
            <span className="text-red-600 font-bold">多次元分析を通じて</span>
            、株式分析と予測の精度を向上させます
          </p>
        </div>
      </div>
    </div>
  );
}
