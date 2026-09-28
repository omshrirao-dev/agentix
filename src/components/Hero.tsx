import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Video, 
  TrendingUp, 
  ExternalLink,
  Code2,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  Upload,
  Maximize2,
  RefreshCw,
  Image as ImageIcon,
  Check,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [customImage, setCustomImage] = useState<string | null>(() => {
    try {
      return localStorage.getItem('hero_custom_image') || null;
    } catch {
      return null;
    }
  });
  const [imageError, setImageError] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Attempt to load /image.png if not already stored in localStorage
  useEffect(() => {
    if (!customImage) {
      const img = new Image();
      img.src = '/image.png';
      img.onload = () => {
        setCustomImage('/image.png');
        setImageError(false);
      };
      img.onerror = () => {
        // file /image.png not found on static server, fallback to default illustration
      };
    } else {
      setIsUploaded(true);
    }
  }, [customImage]);

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setCustomImage(dataUrl);
        setImageError(false);
        setIsUploaded(true);
        try {
          localStorage.setItem('hero_custom_image', dataUrl);
        } catch {
          // In case localStorage quota exceeded
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    setIsUploaded(false);
    setImageError(false);
    try {
      localStorage.removeItem('hero_custom_image');
    } catch {}
  };

  const expertiseTags = [
    { 
      label: "Content Creator", 
      icon: Video, 
      accent: "from-pink-500 to-rose-500",
      border: "border-pink-500/40",
      glow: "shadow-pink-500/20"
    },
    { 
      label: "Website Designer", 
      icon: Palette, 
      accent: "from-fuchsia-500 to-purple-600",
      border: "border-fuchsia-500/40",
      glow: "shadow-fuchsia-500/20"
    },
    { 
      label: "Social Media Marketing Expert & Manager", 
      icon: TrendingUp, 
      accent: "from-purple-500 to-indigo-600",
      border: "border-purple-500/40",
      glow: "shadow-purple-500/20"
    },
  ];

  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker Label */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-400/30 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-fuchsia-200 uppercase">
              AgentiX Digital Growth & Web Engineering
            </span>
          </div>
        </div>

        {/* Main Grid: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Name, Subtitle, Bullet Tags, CTAs */}
          <div className="lg:col-span-7 text-center md:text-left space-y-5">
            
            {/* Name & Subtitle - Noticeably reduced "Hello, I'm" font size per user request */}
            <div className="space-y-2">
              <span className="text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase text-fuchsia-300/90 block">
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                <span className="font-heading bg-gradient-to-r from-white via-fuchsia-100 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-sm">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
                <span className="h-[2px] w-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-fuchsia-300 font-heading">
                  {PERSONAL_INFO.role}
                </h2>
              </div>
            </div>

            {/* Tagline sentence */}
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
              Crafting modern, high-converting websites, targeted search optimization, 
              and engaging VFX video content tailored for local businesses.
            </p>

            {/* The 3 Core Expertise: Clean, Highly Visible & Glowing Tags */}
            <div className="space-y-3 pt-1">
              <div className="text-xs uppercase tracking-wider text-fuchsia-400/90 font-semibold text-left">
                Core Expertise & Focus:
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {expertiseTags.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <div
                      key={tag.label}
                      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1c0833]/70 backdrop-blur-md border ${tag.border} shadow-lg ${tag.glow} transition-all duration-300 hover:scale-[1.02] hover:bg-[#250b44] cursor-default`}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${tag.accent} text-white shadow-sm shadow-fuchsia-900/50 group-hover:rotate-6 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-white tracking-wide">
                        {tag.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#websites"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 rounded-xl shadow-lg shadow-fuchsia-950/60 hover:shadow-fuchsia-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>View Portfolio Websites</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#reels"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-fuchsia-400/40 rounded-xl backdrop-blur-md transition-all hover:text-white"
              >
                <Video className="w-4 h-4 text-fuchsia-400" />
                <span>Watch Reels Portfolio</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-fuchsia-300 hover:text-white underline underline-offset-4 decoration-fuchsia-500/50 hover:decoration-fuchsia-400 transition-colors"
              >
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: User's Uploaded Graphic Showcase (image.png in place of placeholder) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Radiant Glow Behind Image */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-fuchsia-600/40 via-purple-600/30 to-pink-600/40 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700" />
              
              {/* Sleek Glassmorphic Frame for the Creative Workspace Image */}
              <div 
                className={`relative rounded-3xl overflow-hidden bg-[#16042a]/95 backdrop-blur-2xl border transition-all duration-300 shadow-2xl shadow-purple-950/80 ${
                  isDragging 
                    ? 'border-fuchsia-400 ring-4 ring-fuchsia-500/50 scale-[1.02]' 
                    : 'border-fuchsia-500/40 hover:border-fuchsia-400/60'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  if (e.dataTransfer.files?.[0]) {
                    handleImageFile(e.dataTransfer.files[0]);
                  }
                }}
              >
                {/* Hidden File Picker */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />

                {/* Drag Overlay State */}
                {isDragging && (
                  <div className="absolute inset-0 z-50 bg-[#16042a]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-fuchsia-400 animate-in fade-in">
                    <Upload className="w-12 h-12 text-fuchsia-400 animate-bounce mb-3" />
                    <h4 className="text-lg font-bold text-white">Drop your image here</h4>
                    <p className="text-xs text-fuchsia-300 mt-1">
                      Instantly updates the showcase with your uploaded graphic (<code className="font-mono text-amber-300">image.png</code>)
                    </p>
                  </div>
                )}
                
                {/* Image Display */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950 group/image">
                  {customImage && !imageError ? (
                    <img 
                      src={customImage} 
                      alt="Om Shrirao · AgentiX Creative Workspace & VFX Studio" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/image:scale-105"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <CreativeWorkspaceGraphic />
                      
                      {/* Interactive floating button to prompt file upload if default graphic is shown */}
                      <div className="absolute inset-x-4 bottom-24 z-20 flex justify-center">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-fuchsia-600/90 hover:bg-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-950/80 border border-fuchsia-400/40 backdrop-blur-md transition-all hover:scale-105"
                        >
                          <Upload className="w-3.5 h-3.5 text-fuchsia-200 group-hover:scale-110 transition-transform" />
                          <span>Load / Replace with <code className="font-mono text-amber-300 font-bold">image.png</code></span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Corner Accent Badges */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-fuchsia-500/40 text-xs font-semibold text-fuchsia-300 flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                      <span>Creative Design & VFX</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
                    {customImage && (
                      <button
                        onClick={() => setShowPreviewModal(true)}
                        className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-fuchsia-300 transition-colors shadow-lg"
                        title="View Full Resolution Image"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <span className="px-2.5 py-1 rounded-full bg-fuchsia-950/85 backdrop-blur-md border border-fuchsia-400/40 text-[11px] font-semibold text-white shadow-lg">
                      AgentiX Studio
                    </span>
                  </div>

                  {/* Hover Control Bar when Custom Image is Loaded */}
                  {customImage && (
                    <div className="absolute top-14 right-4 z-10 flex items-center gap-1.5">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-2.5 py-1 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md border border-fuchsia-500/40 text-[10px] font-medium text-fuchsia-200 hover:text-white flex items-center gap-1 shadow-md transition-colors"
                        title="Upload another image"
                      >
                        <RefreshCw className="w-3 h-3 text-fuchsia-400" />
                        <span>Swap</span>
                      </button>
                      <button
                        onClick={handleResetImage}
                        className="px-2 py-1 rounded-full bg-black/75 hover:bg-rose-950/80 backdrop-blur-md border border-white/20 text-[10px] font-medium text-slate-300 hover:text-rose-300 flex items-center gap-0.5 shadow-md transition-colors"
                        title="Reset to default illustration"
                      >
                        <X className="w-3 h-3 text-slate-400" />
                      </button>
                    </div>
                  )}

                  {/* Bottom Info Banner */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0e021a] via-[#0e021a]/90 to-transparent z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-white font-heading">
                          Om Shrirao · AgentiX
                        </div>
                        <div className="text-xs text-fuchsia-300/90 mt-0.5">
                          Website Design · Social Media Marketing · VFX Editing
                        </div>
                      </div>
                      {customImage && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-semibold text-emerald-400 flex items-center gap-1 shrink-0">
                          <Check className="w-3 h-3" />
                          <span>Active Image</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Action Strip Below Image */}
                <div className="px-5 py-3 bg-[#120224] border-t border-white/10 flex items-center justify-between text-xs">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-fuchsia-300 transition-colors font-medium"
                  >
                    <Upload className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>{customImage ? 'Change Image (image.png)' : 'Upload image.png'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Direct:</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-bold text-fuchsia-300 hover:text-white transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Modal Preview for Custom Image */}
      {showPreviewModal && customImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setShowPreviewModal(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#140326] border border-fuchsia-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d011c]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                  Uploaded Artwork & Creative Design Showcase
                </h3>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950">
              <img 
                src={customImage} 
                alt="Full resolution artwork preview" 
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#0e021a] border-t border-white/10 text-xs">
              <span className="text-slate-400">
                Displaying user uploaded image (<code className="font-mono text-fuchsia-300">image.png</code>)
              </span>
              <button
                onClick={() => {
                  setShowPreviewModal(false);
                  fileInputRef.current?.click();
                }}
                className="px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Replace with another image</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// SVG illustration recreating the exact composition of the uploaded designer workspace:
// Young creative designer working on laptop at modern desk with graphic design monitor (Creative Design),
// floating software icons (Photoshop Ps, Illustrator Ai, CorelDRAW, Canva, lightbulb idea, pen tool),
// vibrant splash paint bursts, color swatches, sketchbooks, graphics tablet, and studio lighting.
const CreativeWorkspaceGraphic: React.FC = () => {
  return (
    <svg 
      className="w-full h-full object-cover" 
      viewBox="0 0 600 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#1e0538" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0b0118" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="wallGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="monitorBezel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="screenCanvas" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="laptopGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="splash1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="splash2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="splashYellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Room & Studio Wall */}
      <rect width="600" height="600" fill="url(#wallGradient)" />
      <rect width="600" height="600" fill="url(#deskGlow)" opacity="0.8" />

      {/* Hanging Studio Pendant Lamp at Top */}
      <path d="M510,0 L510,70" stroke="#475569" strokeWidth="3" />
      <path d="M460,110 C460,75 560,75 560,110 Z" fill="#1e293b" />
      <polygon points="460,110 560,110 590,260 430,260" fill="#fef08a" opacity="0.08" />

      {/* Studio Poster on Left Wall: "THINK CREATE DESIGN INSPIRE" */}
      <rect x="30" y="30" width="105" height="150" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <text x="82" y="60" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">THINK</text>
      <text x="82" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">CREATE</text>
      <text x="82" y="112" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">DESIGN</text>
      <text x="82" y="138" fill="#e2e8f0" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">INSPIRE</text>

      {/* Studio Poster 2: "IDEAS" */}
      <rect x="180" y="70" width="70" height="95" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="215" y="98" fill="#f1f5f9" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">IDEAS</text>
      <circle cx="215" cy="120" r="14" fill="#f59e0b" opacity="0.3" />
      <text x="215" y="125" fill="#fde047" fontSize="12" textAnchor="middle">💡</text>

      {/* Wooden Desk Surface */}
      <polygon points="0,420 600,420 600,600 0,600" fill="#78350f" />
      <polygon points="0,420 600,420 600,435 0,435" fill="#92400e" />
      <rect y="435" width="600" height="165" fill="#451a03" />

      {/* Vibrant Paint Splash Explosions in the Center */}
      <path 
        d="M270,220 C240,150 310,120 360,180 C400,140 450,160 440,210 C490,190 530,230 490,280 C540,320 480,380 430,340 C370,410 290,360 310,300 Z" 
        fill="url(#splash1)" 
        opacity="0.9"
        filter="url(#softGlow)"
      />
      <path 
        d="M320,180 C360,110 420,130 400,200 C460,190 480,260 420,280 C470,320 390,360 360,310 Z" 
        fill="url(#splash2)" 
        opacity="0.85"
      />
      <circle cx="340" cy="140" r="10" fill="#fbbf24" opacity="0.9" />
      <circle cx="460" cy="160" r="14" fill="#38bdf8" opacity="0.9" />
      <circle cx="280" cy="160" r="7" fill="#f43f5e" opacity="0.9" />
      <circle cx="510" cy="240" r="8" fill="#a855f7" opacity="0.9" />

      {/* Floating Software & Creative Badges */}
      {/* 1. Photoshop Ps */}
      <rect x="270" y="55" width="46" height="46" rx="10" fill="#001e36" stroke="#31a8ff" strokeWidth="2.5" filter="url(#softGlow)" />
      <text x="293" y="85" fill="#31a8ff" fontSize="19" fontWeight="extrabold" fontFamily="sans-serif" textAnchor="middle">Ps</text>

      {/* 2. Illustrator Ai */}
      <rect x="270" y="115" width="46" height="46" rx="10" fill="#330000" stroke="#ff9a00" strokeWidth="2.5" filter="url(#softGlow)" />
      <text x="293" y="145" fill="#ff9a00" fontSize="19" fontWeight="extrabold" fontFamily="sans-serif" textAnchor="middle">Ai</text>

      {/* 3. Glowing Lightbulb */}
      <circle cx="380" cy="90" r="28" fill="#fef08a" opacity="0.25" filter="url(#softGlow)" />
      <circle cx="380" cy="90" r="20" fill="#fbbf24" stroke="#fde047" strokeWidth="2.5" />
      <path d="M373,98 L387,98 M375,102 L385,102" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
      <text x="380" y="96" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">💡</text>

      {/* 4. Vector Pen Tool Curve */}
      <g filter="url(#softGlow)">
        <path d="M430,120 Q465,60 520,105" fill="none" stroke="#e0e7ff" strokeWidth="2.5" strokeDasharray="3,3" />
        <rect x="426" y="116" width="8" height="8" fill="#38bdf8" />
        <rect x="516" y="101" width="8" height="8" fill="#38bdf8" />
        {/* Pen Icon */}
        <polygon points="475,70 488,85 470,95 460,80" fill="#0284c7" />
        <polygon points="460,80 470,95 450,115" fill="#e2e8f0" />
        <circle cx="455" cy="108" r="2" fill="#0f172a" />
      </g>

      {/* 5. CorelDRAW Icon */}
      <circle cx="265" cy="225" r="22" fill="#14532d" stroke="#22c55e" strokeWidth="2" filter="url(#softGlow)" />
      <text x="265" y="231" fill="#4ade80" fontSize="14" textAnchor="middle">🎈</text>

      {/* 6. Canva Icon */}
      <circle cx="265" cy="285" r="22" fill="#00c4cc" stroke="#ffffff" strokeWidth="2" filter="url(#softGlow)" />
      <text x="265" y="291" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Canva</text>

      {/* Desktop Large Monitor on Right */}
      {/* Stand */}
      <polygon points="485,390 535,390 545,430 475,430" fill="#94a3b8" />
      <rect x="502" y="360" width="16" height="40" fill="#64748b" />
      {/* Monitor Body */}
      <rect x="330" y="200" width="245" height="175" rx="8" fill="url(#monitorBezel)" stroke="#475569" strokeWidth="2" />
      {/* Monitor Screen: CREATIVE DESIGN */}
      <rect x="338" y="208" width="229" height="159" rx="4" fill="url(#screenCanvas)" />
      {/* Screen Graphic Contents */}
      <rect x="338" y="208" width="229" height="24" fill="#0f172a" />
      <circle cx="350" cy="220" r="3" fill="#f43f5e" />
      <circle cx="360" cy="220" r="3" fill="#facc15" />
      <circle cx="370" cy="220" r="3" fill="#22c55e" />
      {/* Creative Design artwork inside screen */}
      <path d="M420,260 C460,240 500,280 540,250 L540,360 L420,360 Z" fill="url(#splash1)" opacity="0.7" />
      <text x="450" y="275" fill="#f97316" fontSize="16" fontWeight="900" fontFamily="sans-serif">CREATIVE</text>
      <text x="450" y="305" fill="#dc2626" fontSize="22" fontWeight="900" fontFamily="sans-serif">DESIGN</text>
      {/* Color Swatch palette on side of monitor screen */}
      <rect x="525" y="235" width="35" height="40" rx="3" fill="#ffffff" stroke="#cbd5e1" />
      <rect x="530" y="240" width="25" height="20" fill="url(#splashYellow)" />

      {/* The Designer Character (Left Foreground) */}
      {/* Torso / Denim Shirt */}
      <path d="M10,540 C20,410 90,390 145,400 C190,408 240,430 250,540 Z" fill="#1e3a8a" />
      {/* Inner T-shirt */}
      <polygon points="120,405 160,405 145,460 130,460" fill="#f8fafc" />
      <path d="M105,400 L140,540 M170,400 L150,540" stroke="#172554" strokeWidth="2.5" />
      
      {/* Designer Head / Face / Hair */}
      {/* Neck */}
      <rect x="122" y="355" width="35" height="50" rx="6" fill="#d97706" opacity="0.85" />
      {/* Face */}
      <path d="M110,250 C110,200 170,200 170,250 C170,330 110,330 110,250 Z" fill="#f59e0b" />
      <path d="M115,260 C115,220 165,220 165,260 C165,320 115,320 115,260 Z" fill="#fbbf24" />
      {/* Stylish Dark Hair */}
      <path d="M100,240 C100,165 180,165 180,240 C170,210 160,200 140,200 C120,200 105,220 100,240 Z" fill="#0f172a" />
      {/* Eyeglasses */}
      <rect x="118" y="245" width="22" height="16" rx="4" fill="none" stroke="#0f172a" strokeWidth="2.5" />
      <rect x="146" y="245" width="22" height="16" rx="4" fill="none" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="140" y1="252" x2="146" y2="252" stroke="#0f172a" strokeWidth="2.5" />
      {/* Beard & Smile */}
      <path d="M130,295 Q143,308 156,295" stroke="#78350f" strokeWidth="2" fill="none" />
      <path d="M120,290 C125,325 160,325 165,290" fill="#0f172a" opacity="0.3" />

      {/* Hands & Arms working on Laptop */}
      {/* Left arm */}
      <path d="M30,470 Q90,470 170,480" stroke="#1e3a8a" strokeWidth="32" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M220,460 Q200,480 250,490" stroke="#1e3a8a" strokeWidth="28" strokeLinecap="round" />

      {/* Silver Laptop on Desk */}
      <polygon points="140,455 285,455 315,505 110,505" fill="url(#laptopGrad)" />
      <polygon points="150,370 280,370 285,455 140,455" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="156" y="376" width="118" height="73" fill="#0f172a" />
      {/* Keyboard trackpad */}
      <rect x="180" y="480" width="55" height="20" rx="2" fill="#94a3b8" />

      {/* Pen Holder with Colored Pencils on Left Desk */}
      <rect x="25" y="440" width="50" height="65" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <line x1="35" y1="440" x2="30" y2="390" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
      <line x1="45" y1="440" x2="43" y2="380" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
      <line x1="55" y1="440" x2="57" y2="385" stroke="#eab308" strokeWidth="5" strokeLinecap="round" />
      <line x1="65" y1="440" x2="70" y2="395" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" />

      {/* Graphics Tablet on Desk */}
      <rect x="125" y="525" width="200" height="70" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <rect x="165" y="535" width="145" height="50" rx="3" fill="#0f172a" />
      <rect x="135" y="540" width="14" height="40" rx="2" fill="#334155" />
      {/* Stylus Pen */}
      <line x1="280" y1="535" x2="340" y2="520" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />

      {/* Coffee Cup on Right Desk */}
      <rect x="465" y="455" width="45" height="55" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="487" y="485" fill="#f8fafc" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Coffee</text>
      <text x="487" y="497" fill="#fbbf24" fontSize="7" fontFamily="sans-serif" textAnchor="middle">& Idea</text>

      {/* DSLR Camera on Desk Corner */}
      <rect x="525" y="460" width="55" height="40" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="2" />
      <circle cx="552" cy="480" r="14" fill="#1e293b" stroke="#64748b" strokeWidth="2.5" />
      <circle cx="552" cy="480" r="7" fill="#0284c7" />

      {/* Color Palette Wheels & Swatches at bottom right */}
      <g transform="translate(350, 530)">
        <rect x="0" y="0" width="70" height="50" rx="3" fill="#ffffff" />
        <rect x="5" y="5" width="18" height="18" fill="#ef4444" />
        <rect x="26" y="5" width="18" height="18" fill="#3b82f6" />
        <rect x="47" y="5" width="18" height="18" fill="#eab308" />
        <rect x="5" y="26" width="18" height="18" fill="#22c55e" />
        <rect x="26" y="26" width="18" height="18" fill="#a855f7" />
        <rect x="47" y="26" width="18" height="18" fill="#ec4899" />
      </g>
    </svg>
  );
};
