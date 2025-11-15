interface DynamicAIPromptProps {
  stockName?: string;
  stockCode?: string;
  onStockNameClick?: () => void;
}

export default function DynamicAIPrompt({ stockName, stockCode, onStockNameClick }: DynamicAIPromptProps) {
  if (!stockName) {
    return null;
  }

  return (
    <div className="relative mt-4 max-w-2xl mx-auto">
      <div className="bg-navy-primary/70 backdrop-blur-md rounded-2xl px-6 py-5 shadow-2xl border border-cyan-primary/30">
        <p className="text-sm md:text-base text-white/90 text-center leading-relaxed">
          Detected stock:{' '}
          <span
            onClick={onStockNameClick}
            className="font-bold text-lg text-cyan-primary bg-cyan-primary/10 px-3 py-1 rounded-lg inline-block cursor-pointer hover:bg-cyan-primary/20 transition-colors border border-cyan-primary/30"
          >
            {stockName}
          </span>
        </p>
      </div>
    </div>
  );
}
