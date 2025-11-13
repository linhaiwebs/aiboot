import { useEffect, useState } from 'react';

const popularJapaneseStocks = [
  'トヨタ自動車',
  'ソニーグループ',
  'ソフトバンクグループ',
  '任天堂',
  'キーエンス',
  'ファーストリテイリング',
  '東京エレクトロン',
  '三菱UFJフィナンシャル',
  'リクルートホールディングス',
  '信越化学工業',
  '日本電産',
  'ダイキン工業',
  '村田製作所',
  'KDDI',
  'NTT',
  '武田薬品工業',
  'ホンダ',
  '日立製作所',
  'パナソニック',
  'セブン&アイ'
];

export default function RobotAtComputerAnimation() {
  const [visibleStocks, setVisibleStocks] = useState<Array<{ name: string; id: number; x: number; y: number; speed: number }>>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const addStock = () => {
      const randomStock = popularJapaneseStocks[Math.floor(Math.random() * popularJapaneseStocks.length)];
      const newStock = {
        name: randomStock,
        id: nextId,
        x: Math.random() * 80,
        y: Math.random() * 80,
        speed: 2 + Math.random() * 3
      };

      setVisibleStocks(prev => [...prev.slice(-6), newStock]);
      setNextId(prev => prev + 1);
    };

    addStock();
    const interval = setInterval(addStock, 2000 + Math.random() * 1000);

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="relative inline-block">
      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 shadow-2xl overflow-hidden">
        <div className="flex items-end justify-center gap-6">
          <div className="relative">
            <div className="w-20 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl relative overflow-hidden shadow-lg">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full border-2 border-gray-400">
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-600 rounded"></div>
              </div>

              <div className="absolute bottom-8 left-2 w-4 h-4 bg-gray-300 rounded-full animate-pulse" style={{ animationDuration: '0.5s' }}></div>
              <div className="absolute bottom-8 right-2 w-4 h-4 bg-gray-300 rounded-full animate-pulse" style={{ animationDuration: '0.5s', animationDelay: '0.25s' }}></div>
            </div>

            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              <div className="w-3 h-6 bg-gray-300 rounded-sm animate-typing"></div>
              <div className="w-3 h-6 bg-gray-300 rounded-sm animate-typing" style={{ animationDelay: '0.1s' }}></div>
            </div>
          </div>

          <div className="relative w-32 h-24 bg-gray-900 rounded-lg border-4 border-gray-700 shadow-xl overflow-hidden">
            <div className="absolute inset-1 bg-gradient-to-br from-cyan-900 to-blue-900 rounded overflow-hidden">
              {visibleStocks.map((stock) => (
                <div
                  key={stock.id}
                  className="absolute whitespace-nowrap text-green-400 font-bold text-xs animate-float-stock"
                  style={{
                    left: `${stock.x}%`,
                    top: `${stock.y}%`,
                    animationDuration: `${stock.speed}s`,
                    animationDelay: `${Math.random() * 0.5}s`
                  }}
                >
                  {stock.name}
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-screen-glow"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full"></div>

        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <style>{`
        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes float-stock {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(${0.8 + Math.random() * 0.4});
            opacity: 0;
          }
        }

        @keyframes screen-glow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-typing {
          animation: typing 0.5s ease-in-out infinite;
        }

        .animate-float-stock {
          animation: float-stock 4s ease-in-out infinite;
        }

        .animate-screen-glow {
          animation: screen-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
