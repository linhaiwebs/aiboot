interface StockCodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StockCodeInput({ value, onChange }: StockCodeInputProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter company name or ticker symbol"
          className="w-full px-6 py-5 text-lg font-medium text-white placeholder-white/50 bg-navy-primary/60 backdrop-blur-md border-2 border-white/20 rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-primary focus:border-cyan-primary transition-all"
          maxLength={4}
        />
      </div>
    </div>
  );
}
