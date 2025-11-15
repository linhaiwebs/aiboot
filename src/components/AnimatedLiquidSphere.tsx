export default function AnimatedLiquidSphere() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-3 text-base md:text-lg font-bold tracking-widest text-white/90 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
        STOCK TRADING ROBOT
      </h2>

      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="liquid-sphere-layer-1 absolute w-36 h-36 rounded-full blur-xl opacity-80"></div>
          <div className="liquid-sphere-layer-2 absolute w-40 h-40 rounded-full blur-lg opacity-70"></div>
          <div className="liquid-sphere-layer-3 absolute w-44 h-44 rounded-full blur-md opacity-60"></div>
          <div className="liquid-sphere-main absolute w-32 h-32 rounded-full backdrop-blur-sm"></div>
          <div className="liquid-sphere-highlight absolute w-14 h-14 rounded-full blur-2xl opacity-90"></div>
        </div>

        <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(139,92,246,0.6)]"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-black tracking-wider bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          AI
        </h1>
      </div>

      <style>{`
        @keyframes liquid-flow-1 {
          0%, 100% {
            transform: rotate(0deg) scale(1) translateY(0);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
          }
          25% {
            transform: rotate(90deg) scale(1.1) translateY(-5px);
            background: linear-gradient(135deg, #f093fb 0%, #4facfe 25%, #00f2fe 50%, #667eea 75%, #764ba2 100%);
          }
          50% {
            transform: rotate(180deg) scale(0.95) translateY(5px);
            background: linear-gradient(135deg, #00f2fe 0%, #667eea 25%, #764ba2 50%, #f093fb 75%, #4facfe 100%);
          }
          75% {
            transform: rotate(270deg) scale(1.05) translateY(-3px);
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 25%, #667eea 50%, #764ba2 75%, #f093fb 100%);
          }
        }

        @keyframes liquid-flow-2 {
          0%, 100% {
            transform: rotate(360deg) scale(1.05);
            background: linear-gradient(225deg, #fa709a 0%, #fee140 25%, #30cfd0 50%, #a044ff 75%, #fa709a 100%);
          }
          33% {
            transform: rotate(240deg) scale(0.95);
            background: linear-gradient(225deg, #30cfd0 0%, #a044ff 25%, #fa709a 50%, #fee140 75%, #30cfd0 100%);
          }
          66% {
            transform: rotate(120deg) scale(1.1);
            background: linear-gradient(225deg, #fee140 0%, #30cfd0 25%, #a044ff 50%, #fa709a 75%, #fee140 100%);
          }
        }

        @keyframes liquid-flow-3 {
          0%, 100% {
            transform: rotate(180deg) scale(1) translateX(0);
            background: linear-gradient(315deg, #ff6b6b 0%, #feca57 25%, #48dbfb 50%, #ff9ff3 75%, #54a0ff 100%);
          }
          20% {
            transform: rotate(216deg) scale(1.08) translateX(3px);
            background: linear-gradient(315deg, #48dbfb 0%, #ff9ff3 25%, #54a0ff 50%, #ff6b6b 75%, #feca57 100%);
          }
          40% {
            transform: rotate(252deg) scale(0.92) translateX(-3px);
            background: linear-gradient(315deg, #54a0ff 0%, #ff6b6b 25%, #feca57 50%, #48dbfb 75%, #ff9ff3 100%);
          }
          60% {
            transform: rotate(288deg) scale(1.05) translateX(2px);
            background: linear-gradient(315deg, #feca57 0%, #48dbfb 25%, #ff9ff3 50%, #54a0ff 75%, #ff6b6b 100%);
          }
          80% {
            transform: rotate(324deg) scale(0.97) translateX(-2px);
            background: linear-gradient(315deg, #ff9ff3 0%, #54a0ff 25%, #ff6b6b 50%, #feca57 75%, #48dbfb 100%);
          }
        }

        @keyframes liquid-main {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%),
                        linear-gradient(45deg, #667eea 0%, #764ba2 20%, #f093fb 40%, #4facfe 60%, #00f2fe 80%, #667eea 100%);
          }
          25% {
            transform: scale(1.05) rotate(90deg);
            background: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4), transparent 50%),
                        linear-gradient(45deg, #f093fb 0%, #4facfe 20%, #00f2fe 40%, #667eea 60%, #764ba2 80%, #f093fb 100%);
          }
          50% {
            transform: scale(0.98) rotate(180deg);
            background: radial-gradient(circle at 70% 70%, rgba(255,255,255,0.4), transparent 50%),
                        linear-gradient(45deg, #00f2fe 0%, #667eea 20%, #764ba2 40%, #f093fb 60%, #4facfe 80%, #00f2fe 100%);
          }
          75% {
            transform: scale(1.03) rotate(270deg);
            background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4), transparent 50%),
                        linear-gradient(45deg, #764ba2 0%, #f093fb 20%, #4facfe 40%, #00f2fe 60%, #667eea 80%, #764ba2 100%);
          }
        }

        @keyframes highlight-move {
          0%, 100% {
            transform: translate(-30%, -30%) scale(1);
            background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
          }
          50% {
            transform: translate(-20%, -20%) scale(1.2);
            background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%);
          }
        }

        @keyframes text-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .liquid-sphere-layer-1 {
          animation: liquid-flow-1 8s ease-in-out infinite;
          will-change: transform;
        }

        .liquid-sphere-layer-2 {
          animation: liquid-flow-2 10s ease-in-out infinite;
          will-change: transform;
        }

        .liquid-sphere-layer-3 {
          animation: liquid-flow-3 12s ease-in-out infinite;
          will-change: transform;
        }

        .liquid-sphere-main {
          animation: liquid-main 6s ease-in-out infinite;
          will-change: transform;
          box-shadow:
            inset 0 0 60px rgba(255,255,255,0.3),
            0 0 40px rgba(139,92,246,0.4),
            0 0 80px rgba(139,92,246,0.2);
        }

        .liquid-sphere-highlight {
          animation: highlight-move 3s ease-in-out infinite;
          will-change: transform;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
