import { Monitor, Bot, Sparkles } from 'lucide-react';

export default function RobotHeaderAnimation() {
  return (
    <div className="relative inline-block">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <Bot className="w-20 h-20 text-white animate-bounce" style={{ animationDuration: '2s' }} />
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
          </div>

          <div className="relative">
            <Monitor className="w-16 h-16 text-blue-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-7 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 -right-3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}
