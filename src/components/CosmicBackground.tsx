import React from 'react';

export const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Deep Multi-Stop Gradient Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #090114 0%, #150328 20%, #260749 45%, #18032e 70%, #0c0117 100%)',
        }}
      />

      {/* Radiant Glow Spheres matching the images */}
      <div 
        className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-35"
        style={{ background: 'radial-gradient(circle, #c026d3 0%, #7e22ce 50%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[35%] -right-[10%] w-[750px] h-[750px] rounded-full blur-[160px] opacity-25"
        style={{ background: 'radial-gradient(circle, #e879f9 0%, #9333ea 50%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[68%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[150px] opacity-25"
        style={{ background: 'radial-gradient(circle, #d946ef 0%, #581c87 50%, transparent 80%)' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[15%] w-[800px] h-[800px] rounded-full blur-[160px] opacity-30"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, #3b0764 60%, transparent 80%)' }}
      />

      {/* Flowing Luminous Wave Curves (faithful recreation of the uploaded artwork) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 3200"
      >
        <defs>
          <linearGradient id="waveGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#d946ef" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGlow2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Top Wave Ribbons */}
        <path 
          d="M-100,280 C320,120 740,460 1540,180" 
          fill="none" 
          stroke="url(#waveGlow1)" 
          strokeWidth="2.5"
          filter="url(#glowBlur)"
        />
        <path 
          d="M-100,310 C340,160 760,490 1540,220" 
          fill="none" 
          stroke="url(#waveGlow1)" 
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <path 
          d="M-100,340 C360,200 780,520 1540,260" 
          fill="none" 
          stroke="url(#waveGlow1)" 
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <path 
          d="M-100,370 C380,240 800,550 1540,300" 
          fill="none" 
          stroke="url(#waveGlow1)" 
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Mid Section Dynamic Waves */}
        <path 
          d="M1540,900 C1100,1250 500,850 -100,1180" 
          fill="none" 
          stroke="url(#waveGlow2)" 
          strokeWidth="2.2"
          filter="url(#glowBlur)"
        />
        <path 
          d="M1540,940 C1080,1280 480,890 -100,1220" 
          fill="none" 
          stroke="url(#waveGlow2)" 
          strokeWidth="1.4"
          strokeOpacity="0.5"
        />
        <path 
          d="M1540,980 C1060,1310 460,930 -100,1260" 
          fill="none" 
          stroke="url(#waveGlow2)" 
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Lower SEO & Social Waves */}
        <path 
          d="M-100,1850 C400,2150 950,1750 1540,2050" 
          fill="none" 
          stroke="url(#waveGlow1)" 
          strokeWidth="2.5"
          filter="url(#glowBlur)"
        />
        <path 
          d="M-100,1890 C420,2180 970,1790 1540,2090" 
          fill="none" 
          stroke="url(#waveGlow1)" 
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Footer Ambient Wave */}
        <path 
          d="M1540,2650 C1150,2900 450,2600 -100,2850" 
          fill="none" 
          stroke="url(#waveGlow2)" 
          strokeWidth="2"
          filter="url(#glowBlur)"
        />

        {/* Sparkle Stars extracted from user image 2 */}
        <g fill="#f5d0fe" opacity="0.8">
          {/* Top Hero Sparkles */}
          <polygon points="260,180 263,189 272,192 263,195 260,204 257,195 248,192 257,189" />
          <polygon points="1180,240 1182,246 1188,248 1182,250 1180,256 1178,250 1172,248 1178,246" />
          <polygon points="850,120 852,125 857,127 852,129 850,134 848,129 843,127 848,125" />
          <circle cx="480" cy="290" r="1.5" />
          <circle cx="980" cy="380" r="2" />
          <circle cx="150" cy="420" r="1.8" />
          
          {/* Mid Section Sparkles */}
          <polygon points="120,1120 122,1127 129,1129 122,1131 120,1138 118,1131 111,1129 118,1127" />
          <polygon points="1320,1050 1322,1056 1328,1058 1322,1060 1320,1066 1318,1060 1312,1058 1318,1056" />
          <circle cx="680" cy="1220" r="2" />
          <circle cx="880" cy="1080" r="1.5" />

          {/* Lower Section Sparkles */}
          <polygon points="240,2200 242,2206 248,2208 242,2210 240,2216 238,2210 232,2208 238,2206" />
          <polygon points="1260,2120 1262,2127 1269,2129 1262,2131 1260,2138 1258,2131 1251,2129 1258,2127" />
          <circle cx="550" cy="2350" r="1.5" />
        </g>
      </svg>

      {/* Subtle Film Grain Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
