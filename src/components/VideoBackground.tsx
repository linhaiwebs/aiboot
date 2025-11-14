export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-blue-600/40 via-indigo-700/30 to-slate-800/40"></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400/20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              />
            ))}
          </div>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/70 to-gray-900/70"></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(10%, 10%) scale(1.1);
            opacity: 0.4;
          }
          66% {
            transform: translate(-10%, 5%) scale(0.95);
            opacity: 0.25;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(30px, -30px) scale(1.2);
            opacity: 0.4;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
