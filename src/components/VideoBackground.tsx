import { useState } from 'react';

export default function VideoBackground() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      )}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
    </div>
  );
}
