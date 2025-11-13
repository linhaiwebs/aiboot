import { Hand } from 'lucide-react';

interface DynamicAIPromptProps {
  stockName: string;
}

export default function DynamicAIPrompt({ stockName }: DynamicAIPromptProps) {
  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '1.5s' }}>
        <Hand className="w-10 h-10 text-yellow-400 drop-shadow-lg rotate-12" />
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-2xl border-2 border-blue-300">
        <p className="text-base md:text-lg text-gray-800 text-center leading-relaxed">
          検測到您可能想查詢{' '}
          <span className="font-bold text-2xl text-blue-600 bg-yellow-200 px-2 py-1 rounded">
            {stockName}
          </span>{' '}
          的指標和數據以及走勢，AI已經準備好為你服務，幾秒就可以出完整結果
        </p>
      </div>
    </div>
  );
}
