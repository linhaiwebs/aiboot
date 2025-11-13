import { Bot, Brain } from 'lucide-react';

export default function RobotHeaderAnimation() {
  return (
    <div className="relative inline-block">
      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-center gap-3">
          <div className="relative">
            <Bot className="w-16 h-16 text-white" />
          </div>

          <div className="relative">
            <Brain className="w-14 h-14 text-blue-100 animate-pulse" style={{ animationDuration: '2s' }} />
          </div>
        </div>

        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}
