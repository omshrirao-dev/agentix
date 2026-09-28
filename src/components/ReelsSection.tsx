import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Music, 
  Sparkles 
} from 'lucide-react';
import { REELS_DATA } from '../data/portfolioData';
import { InstagramReel } from '../types';

interface ReelsSectionProps {
  onExpandReel: (reel: InstagramReel) => void;
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({ onExpandReel }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const togglePlay = (id: string, reel?: InstagramReel, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Pause all other HTML5 videos
    Object.keys(videoRefs.current).forEach((key) => {
      if (key !== id && videoRefs.current[key]) {
        videoRefs.current[key]?.pause();
      }
    });

    if (playingId === id) {
      if (videoRefs.current[id]) {
        videoRefs.current[id]?.pause();
      }
      setPlayingId(null);
      return;
    }

    if (reel?.youtubeId) {
      setPlayingId(id);
      return;
    }

    const video = videoRefs.current[id];
    if (video) {
      video.play().then(() => {
        setPlayingId(id);
      }).catch((err) => {
        console.warn("Video playback requires user gesture or direct interaction", err);
        setPlayingId(id);
      });
    } else {
      setPlayingId(id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) vid.muted = newMuted;
    });
  };

  const categories = ['all', 'Fashion & Clothing', 'Furniture & Interiors', 'Restaurants & Dining', 'Brand Scaling'];

  const filteredReels = selectedFilter === 'all' 
    ? REELS_DATA 
    : REELS_DATA.filter(r => r.clientNiche === selectedFilter);

  return (
    <section id="reels" className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/70 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Social Media Video Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Instagram Reels <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            High-retention vertical reels, kinetic typography, and motion design campaigns crafted by Om Shrirao for local brand growth.
          </p>

          {/* Audio Toggle & Filters */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-fuchsia-200 bg-fuchsia-950/60 hover:bg-fuchsia-900/60 border border-fuchsia-500/30 rounded-xl transition-all shadow-sm"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-fuchsia-400" />
                  <span>Unmute Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Audio Enabled</span>
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-black/40 border border-white/10 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedFilter === cat
                      ? 'bg-fuchsia-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All Reels' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReels.map((reel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative rounded-3xl overflow-hidden bg-[#16042b] border border-fuchsia-500/25 shadow-2xl shadow-purple-950/80 hover:border-fuchsia-400/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* 9:16 Aspect Ratio Video Container (Styled with rounded 15px corners & high-end borders) */}
                <div 
                  className="relative aspect-[9/16] w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => togglePlay(reel.id, reel)}
                >
                  {reel.youtubeId ? (
                    isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${reel.youtubeId}&controls=1`}
                        title={reel.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={reel.thumbnailUrl || `https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg`}
                          alt={reel.title}
                          className="w-full h-full object-cover select-none"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg`;
                          }}
                        />

                        {/* YouTube Short Badge */}
                        <div className="absolute top-12 left-3 z-10 px-2 py-0.5 rounded-md bg-red-600/90 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Play className="w-2.5 h-2.5 fill-white" />
                          <span>YouTube Short</span>
                        </div>

                        {/* Gradient Fallback Poster Overlay with Play button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#11011f] via-[#1b0532]/35 to-transparent flex items-center justify-center transition-opacity duration-300">
                          <div className="relative group-hover:scale-110 transition-transform duration-300">
                            <div className="absolute -inset-2 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-red-600 to-pink-500" />
                            <div className="relative w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl border border-white/30 bg-red-600">
                              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  ) : (
                    <>
                      {/* HTML5 Video Element */}
                      <video
                        ref={(el) => {
                          videoRefs.current[reel.id] = el;
                        }}
                        src={reel.videoUrl}
                        className="w-full h-full object-cover select-none"
                        loop
                        muted={isMuted}
                        playsInline
                        preload="metadata"
                        onEnded={() => setPlayingId(null)}
                      />

                      {/* Gradient Fallback Poster Overlay (Active when paused) */}
                      {!isPlaying && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#11011f] via-[#1b0532]/40 to-transparent flex items-center justify-center transition-opacity duration-300">
                          <div className="relative group-hover:scale-110 transition-transform duration-300">
                            <div className="absolute -inset-2 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-fuchsia-600 to-pink-500" />
                            <div className="relative w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl border border-white/30 bg-fuchsia-600">
                              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Active Playing Indicator on Hover for HTML5 video */}
                  {isPlaying && !reel.youtubeId && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                        <Pause className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Top Floating Glass Info Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full backdrop-blur-md border border-white/10 bg-black/60 text-[10px] font-bold text-fuchsia-200">
                      {reel.clientNiche}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onExpandReel(reel);
                      }}
                      className="p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-fuchsia-600 transition-colors"
                      title="Expand to Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0e011a] via-[#0e011a]/85 to-transparent z-10 space-y-1.5">
                    <div className="text-sm font-bold text-white font-heading truncate drop-shadow-sm">
                      {reel.title}
                    </div>

                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {reel.caption}
                    </p>

                    <div className="flex items-center gap-1.5 text-[10px] text-fuchsia-300 font-medium pt-0.5">
                      <Music className="w-3 h-3 shrink-0" />
                      <span className="truncate">{reel.audioTrack}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Controls */}
                <div className="p-3 bg-[#130324] border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-fuchsia-300 text-[11px] font-medium">
                      {reel.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => togglePlay(reel.id, reel, e)}
                      className="px-2.5 py-1 rounded-lg bg-fuchsia-950/80 hover:bg-fuchsia-900 border border-fuchsia-500/30 text-[11px] font-medium text-fuchsia-200 transition-colors flex items-center gap-1"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3 h-3 fill-current" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current" />
                          <span>Play</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onExpandReel(reel)}
                      className="px-2.5 py-1 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[11px] font-semibold transition-colors flex items-center gap-1"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Fullscreen</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to contact for custom Reels */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-3">
            Looking for high-impact vertical video production and social media marketing for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-fuchsia-950/60 transition-all hover:scale-105"
          >
            <span>Commission a Custom Reel Campaign</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
