import { Search } from 'lucide-react';

interface StockCodeInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function StockCodeInput({ value, onChange, onSubmit }: StockCodeInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="輸入股票代碼 (例: 2269)"
          className="w-full px-6 py-4 pr-14 text-lg font-semibold text-gray-800 bg-white border-4 border-blue-400 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
          maxLength={4}
        />
        <button
          onClick={onSubmit}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-lg transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
