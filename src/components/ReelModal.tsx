import React, { useRef, useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Music, 
  Share2, 
  Check,
  Heart
} from 'lucide-react';
import { InstagramReel } from '../types';

interface ReelModalProps {
  reel: InstagramReel | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (reel && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [reel]);

  if (!reel) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      
      {/* Outer Click to Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-md h-[86vh] max-h-[820px] rounded-3xl overflow-hidden bg-[#120324] border border-fuchsia-500/40 shadow-2xl flex flex-col">
        
        {/* Top Floating Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-fuchsia-300">
              {reel.clientNiche}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-fuchsia-600 transition-colors"
              title="Like Reel"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : 'text-white'}`} />
            </button>

            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-fuchsia-600 transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-fuchsia-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-fuchsia-600 transition-colors"
              title="Share Reel Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-rose-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
          {reel.youtubeId ? (
            <div className="w-full h-full relative">
              <iframe
                src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${reel.youtubeId}&controls=1`}
                title={reel.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={reel.videoUrl}
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
                autoPlay
              />

              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-fuchsia-600/90 text-white flex items-center justify-center shadow-2xl border border-white/20">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom Scrim Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent z-20 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                    OS
                  </div>
                  <span className="text-xs font-bold text-white">@omshrirao</span>
                  <span className="text-xs text-blue-400">✓</span>
                </div>

                <div className="text-base font-extrabold text-white font-heading">
                  {reel.title}
                </div>

                <p className="text-xs text-slate-200 leading-relaxed">
                  {reel.caption}
                </p>

                <div className="flex items-center gap-2 text-xs text-fuchsia-300 font-medium pt-1">
                  <Music className="w-3.5 h-3.5" />
                  <span>{reel.audioTrack}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Quick Action Bar */}
        <div className="p-3 bg-[#110221] border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 text-fuchsia-300 font-semibold"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause' : 'Play'} Reel</span>
          </button>

          <span className="text-slate-400">Duration: {reel.duration}</span>
        </div>

      </div>

    </div>
  );
};
