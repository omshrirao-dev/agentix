import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SEO_POINTS } from '../data/portfolioData';

export const SeoSection: React.FC = () => {
  const iconsMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-fuchsia-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-fuchsia-400" />,
    Zap: <Zap className="w-6 h-6 text-fuchsia-400" />,
    Target: <Target className="w-6 h-6 text-fuchsia-400" />,
  };

  return (
    <section id="seo" className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-fuchsia-400" />
            Rank on Google Search
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            SEO (Search Engine Optimization) <span className="bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">Mastery</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Our clean architecture and targeted search strategy connect local businesses 
            with customers actively looking for their products and services on Google.
          </p>
        </div>

        {/* 4 Core Pillars Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SEO_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="group relative rounded-2xl bg-[#19062e]/60 backdrop-blur-xl border border-fuchsia-500/20 p-5 sm:p-6 shadow-xl hover:border-fuchsia-400/50 hover:bg-[#22093e]/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-fuchsia-950/80 border border-fuchsia-500/30 text-white shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-fuchsia-900/30">
                  {iconsMap[point.iconName]}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-fuchsia-400">
                      0{index + 1}. SEO STRATEGY
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading tracking-tight">
                    {point.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
