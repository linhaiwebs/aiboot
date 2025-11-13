import { Hand } from 'lucide-react';

interface DynamicAIPromptProps {
  stockName?: string;
}

export default function DynamicAIPrompt({ stockName }: DynamicAIPromptProps) {
  return (
    <div className="relative mt-8">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '1.5s' }}>
        <Hand className="w-12 h-12 text-yellow-300 drop-shadow-2xl rotate-12" />
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-2xl border-2 border-blue-300">
        {stockName ? (
          <p className="text-base md:text-lg text-gray-800 text-center leading-relaxed">
            检测到您可能想查询{' '}
            <span className="font-bold text-2xl text-blue-600 bg-yellow-200 px-2 py-1 rounded inline-block">
              {stockName}
            </span>{' '}
            的指标和数据以及走势，AI已经准备好为你服务，几秒就可以出完整结果
          </p>
        ) : (
          <p className="text-base md:text-lg text-gray-800 text-center leading-relaxed">
            输入股票代码，AI将为您分析股票的指标、数据以及走势，几秒就可以出完整结果
          </p>
        )}
      </div>
    </div>
  );
}
