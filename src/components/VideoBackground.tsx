export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/background.svg"
        onError={(e) => {
          const target = e.target as HTMLVideoElement;
          target.style.display = 'none';
        }}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/70 to-gray-900/70"></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
    </div>
  );
}
