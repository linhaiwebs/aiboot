export default function SpeechBubble() {
  return (
    <div className="relative inline-block mt-6">
      <div className="bg-black border-4 border-white rounded-2xl px-8 py-4 shadow-2xl">
        <h1 className="text-2xl md:text-4xl font-bold text-white whitespace-nowrap">
          AI人工智能株分析
        </h1>
      </div>

      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>
      <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-black"></div>
    </div>
  );
}
