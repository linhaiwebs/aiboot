export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <div className="absolute inset-0 bg-navy-gradient"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-primary/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
