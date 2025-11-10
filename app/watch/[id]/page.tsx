'use client';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { useRouter } from 'next/navigation';

export default function WatchPageClient() {
  const router = useRouter();
  // Next.js app-router dynamic param via global location parsing for demo:
  const id = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!id || !videoRef.current) return;

    const manifestUrl = `/api/media/manifest/${encodeURIComponent(id)}`;

    const video = videoRef.current;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = manifestUrl;
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(manifestUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => { hls.destroy(); };
    } else {
      // fallback
      console.warn('HLS not supported in this browser');
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/60 to-bg text-white">
      <div className="max-w-6xl mx-auto p-4">
        <div className="rounded-md shadow-2xl overflow-hidden">
          <video
            ref={videoRef}
            controls
            className="w-full h-[60vh] bg-black"
            controlsList="nodownload"
          />
        </div>
      </div>
    </div>
  );
}
