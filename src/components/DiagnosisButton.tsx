interface DiagnosisButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function DiagnosisButton({ onClick, disabled = false }: DiagnosisButtonProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute -inset-1 bg-cyan-gradient rounded-2xl blur opacity-50 animate-pulse-cyan"></div>
      <button
        onClick={onClick}
        disabled={disabled}
        className="relative w-full bg-cyan-gradient hover:bg-cyan-gradient-hover disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-lg shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold">Start Analysis</div>
          </div>
        </div>
      </button>
    </div>
  );
}
