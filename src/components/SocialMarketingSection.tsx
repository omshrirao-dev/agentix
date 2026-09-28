import React, { useState } from 'react';
import { 
  Instagram, 
  Sparkles, 
  Video, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Armchair, 
  Utensils, 
  Shirt 
} from 'lucide-react';
import { SOCIAL_MARKETING_POINTS, TARGET_NICHES } from '../data/portfolioData';

export const SocialMarketingSection: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<number>(0);

  const nicheDetails = [
    {
      title: "Furniture Stores & Showrooms",
      focus: "Custom Furniture Inquiries & Showroom Footfall",
      contentStyle: "Wood-grain finishes, 360° showroom walkthroughs, interior room staging, and luxury craft highlights.",
      icon: Armchair
    },
    {
      title: "Restaurants & Gourmet Dining",
      focus: "Table Reservations & Local Food Lovers",
      contentStyle: "Slow-motion food sizzles, signature dish presentations, chef action shots, and aesthetic dining ambience.",
      icon: Utensils
    },
    {
      title: "Fashion & Clothing Brands",
      focus: "Customer Inquiries & Collection Drops",
      contentStyle: "Garment flow transitions, festive collection lookbooks, styling videos, and seasonal campaign reels.",
      icon: Shirt
    }
  ];

  return (
    <section id="social-media" className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5 text-fuchsia-400" />
            Social Media & Video Production
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Social Media Marketing & <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">VFX Content Creation</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Engaging Instagram account management combined with high-retention VFX video editing 
            tailored for local businesses to build an active, loyal customer base.
          </p>
        </div>

        {/* Local Business Niches Catered */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-fuchsia-400 font-semibold">
              Specialized Strategies for Local Businesses
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nicheDetails.map((niche, idx) => {
              const Icon = niche.icon;
              const isSelected = selectedNiche === idx;

              return (
                <div
                  key={niche.title}
                  onClick={() => setSelectedNiche(idx)}
                  className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#22093e] border-2 border-fuchsia-400 shadow-xl shadow-fuchsia-950/60 scale-[1.02]'
                      : 'bg-[#18052d]/60 border border-fuchsia-500/20 hover:border-fuchsia-400/40 hover:bg-[#1e0737]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-fuchsia-600 text-white' : 'bg-fuchsia-950/80 text-fuchsia-300'} border border-fuchsia-500/30`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-fuchsia-300">
                      Local Business
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-1.5">
                    {niche.title}
                  </h3>

                  <div className="text-xs font-medium text-fuchsia-300/90 mb-3">
                    Goal: {niche.focus}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {niche.contentStyle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SOCIAL_MARKETING_POINTS.map((point, index) => {
            return (
              <div
                key={point.title}
                className="relative rounded-2xl bg-[#19062e]/70 backdrop-blur-xl border border-fuchsia-500/20 p-7 shadow-xl hover:border-fuchsia-400/50 hover:bg-[#230940] transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-fuchsia-950/80 border border-fuchsia-500/30 text-fuchsia-300">
                      {point.tag}
                    </span>
                    <span className="text-xs font-mono text-fuchsia-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-heading">
                    {point.title}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {point.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-fuchsia-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                      <span>Structured AgentiX Execution Workflow</span>
                    </div>
                    {point.tag === "VFX & Motion Design" && (
                      <a 
                        href="#reels" 
                        className="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1"
                      >
                        <span>See Client Reels</span>
                        <span>↓</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
