import React from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Check, 
  ArrowUpRight, 
  Eye, 
  Globe, 
  Maximize2,
  PhoneCall
} from 'lucide-react';
import { WEBSITES_DATA } from '../data/portfolioData';
import { ProjectWebsite } from '../types';

interface WebsitesSectionProps {
  onSelectProject: (project: ProjectWebsite) => void;
}

export const WebsitesSection: React.FC<WebsitesSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="websites" className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/30 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            Live Client Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            What We Do: <span className="bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">End-to-End Website Design & Development</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Real, production-grade local business websites engineered by Om Shrirao. 
            Tailored architecture, high-conversion layouts, and seamless customer action funnels.
          </p>
        </div>

        {/* The 2 Real Local Business Websites in Split-Screen Layout */}
        <div className="space-y-12 lg:space-y-16">
          {WEBSITES_DATA.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              >
                {/* Left Side: Business Name, Tagline, Description, Stylized Visit Website Button */}
                <div 
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category & Niche Tag */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 font-heading">
                      0{index + 1}. {project.category}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="text-xs text-emerald-400 font-medium">Live Production Site</span>
                  </div>

                  {/* Business Name */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-fuchsia-300/90 italic mt-1 font-heading">
                      "{project.tagline}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Website Features & Scope:
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((feature, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <span className="p-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-400 shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stylized Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-xl shadow-lg shadow-fuchsia-950/60 hover:shadow-fuchsia-500/30 transition-all hover:-translate-y-0.5"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/40 rounded-xl transition-all hover:text-white"
                    >
                      <Eye className="w-4 h-4 text-fuchsia-400" />
                      <span>Live Preview</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Screenshot Container (Neat, rounded-edge with slight drop shadow & hover-zoom effect) */}
                <div 
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="group relative">
                    {/* Atmospheric Glow on Hover */}
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30 blur-2xl opacity-40 group-hover:opacity-80 transition duration-500" />

                    {/* Outer Rounded Container with Drop Shadow */}
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#150529] border border-fuchsia-500/25 shadow-2xl shadow-purple-950/70 transition-all duration-500 group-hover:border-fuchsia-400/50">
                      
                      {/* Browser Chrome Header Mockup */}
                      <div className="flex items-center justify-between px-4 py-3 bg-[#110321] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        
                        {/* URL Bar */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-slate-300 text-[11px] max-w-[260px] sm:max-w-xs truncate">
                          <Globe className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{project.url.replace('https://', '')}</span>
                        </div>

                        <button
                          onClick={() => onSelectProject(project)}
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Expand View"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Mockup Body with Hover-Zoom Effect */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                          {project.screenshotTheme === 'fashion' ? (
                            <ChaudhariLifestyleRealMockup />
                          ) : (
                            <DelightFurnitureMockup />
                          )}
                        </div>

                        {/* Interactive overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#120324]/90 via-[#120324]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-wider font-semibold text-fuchsia-400">
                              {project.category}
                            </div>
                            <div className="text-lg font-bold text-white font-heading">
                              {project.title}
                            </div>
                          </div>
                          
                          <button
                            onClick={() => onSelectProject(project)}
                            className="px-4 py-2 text-xs font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg shadow-lg shadow-fuchsia-900/60 transition-all flex items-center gap-1.5"
                          >
                            <span>Inspect UI</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
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

// Exact, high-fidelity reproduction of the real Chaudhari Lifestyle hero screenshot:
// - Cream/warm grid background
// - Top Navbar with colorful abstract logo mark, "CHAUDHARI LIFESTYLE NAGPUR · FAMILY GARMENTS"
// - Nav links: Catalog, Specialties, Customer Reviews, Store Location
// - Right actions: "Admin Leads" pill, WhatsApp green button, and dark teal "Send Query / Booking" button
// - Left Hero Typography: "CHAUDHARI LIFESTYLE / ALL AGE GROUPS / FINE TEXTILES"
// - Large headline: "Elegance for Every Generation." in classic serif with italicized "Every Generation."
// - Subtitle: "Fine ethnic wear, bespoke suiting, and fabrics for men, women, and kids."
// - Buttons: "Browse Catalog ↓" (dark teal) and "Book Visit / Query" (white with subtle border)
// - Ratings: ★★★★★ 4.8 / 5 Rating · Justdial Verified · 100% Quality Fabric Guarantee
// - Right Hero Card: Uses the exact authentic high-resolution photographic portrait of the bride in cyan embroidered dupatta,
//   the authentic Raymond suiting card, and the printed model kurta card.
const ChaudhariLifestyleRealMockup: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#fbf9f4] text-slate-800 p-3 sm:p-5 flex flex-col justify-between select-none relative overflow-hidden font-sans">
      
      {/* Background Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#e4ded4 1px, transparent 1px), linear-gradient(to right, #e4ded4 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Navigation Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-stone-200/90 pb-2.5">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          {/* Logo mark matching the real site (abstract circular petals in ruby, magenta, purple) */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-600 via-rose-700 to-purple-800 flex items-center justify-center shadow-xs">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-200" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#1a3834] font-serif leading-none">
              CHAUDHARI
            </div>
            <div className="text-[7px] sm:text-[8px] font-semibold tracking-widest uppercase text-stone-500 mt-0.5">
              LIFESTYLE · NAGPUR - FAMILY GARMENTS
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-4 text-[10px] text-stone-600 font-medium">
          <span className="hover:text-stone-900 cursor-pointer">Catalog</span>
          <span className="hover:text-stone-900 cursor-pointer">Specialties</span>
          <span className="hover:text-stone-900 cursor-pointer">Customer Reviews</span>
          <span className="hover:text-stone-900 cursor-pointer">Store Location</span>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 text-[9px] font-medium text-stone-600 bg-stone-100 border border-stone-200 rounded">
            <span>Admin Leads</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 text-[9px] font-semibold text-emerald-800 bg-[#ebfbf3] border border-emerald-300 rounded shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>WhatsApp</span>
          </div>
          <div className="px-2.5 py-1 text-[9px] font-semibold text-white bg-[#193a35] rounded shadow-xs whitespace-nowrap">
            Send Query / Booking
          </div>
        </div>
      </div>

      {/* Hero Showcase Body */}
      <div className="relative z-10 grid grid-cols-12 gap-3 sm:gap-4 items-center my-auto py-1">
        
        {/* Left Column: Heading & Description */}
        <div className="col-span-7 space-y-2">
          <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-stone-500 font-semibold">
            CHAUDHARI LIFESTYLE / ALL AGE GROUPS / FINE TEXTILES
          </div>

          <div className="text-xl sm:text-3xl lg:text-4xl font-serif text-[#163632] leading-[1.12]">
            Elegance for <span className="italic font-normal text-[#2b5952]">Every Generation.</span>
          </div>

          <p className="text-[10px] sm:text-xs text-stone-600 max-w-xs leading-relaxed">
            Fine ethnic wear, bespoke suiting, and fabrics for men, women, and kids.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <div className="px-3 py-1.5 bg-[#173a35] text-white text-[10px] sm:text-[11px] font-medium rounded shadow-xs flex items-center gap-1">
              <span>Browse Catalog</span>
              <span>↓</span>
            </div>
            <div className="px-3 py-1.5 bg-white border border-stone-300 text-stone-700 text-[10px] sm:text-[11px] font-medium rounded shadow-xs">
              Book Visit / Query
            </div>
          </div>

          {/* Social Proof Badges */}
          <div className="pt-1.5 flex flex-wrap items-center gap-2 text-[8px] sm:text-[9px] text-stone-600">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <span>★★★★★</span>
              <span className="text-stone-700">4.8 / 5 Rating</span>
            </div>
            <span className="text-stone-300">·</span>
            <span>Justdial Verified</span>
            <span className="text-stone-300">·</span>
            <span className="text-emerald-700 font-medium">✓ 100% Quality Fabric Guarantee</span>
          </div>
        </div>

        {/* Right Column: Hero Fashion Model Visual (Real Image from Chaudhari Lifestyle) */}
        <div className="col-span-5 relative">
          
          {/* Main Tall Rounded Model Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300/80 aspect-[4/5] bg-stone-900 group">
            
            {/* Real Photographic Image of the Bride in Cyan Embroidered Dupatta from the website */}
            <img 
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85" 
              alt="Chaudhari Lifestyle Curated Family Collections" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            
            {/* Subtle Gradient Shadow Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

            {/* Top-Left Floating Badge: "Curated Family Collections" */}
            <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md shadow-md border border-stone-200 text-[8px] sm:text-[9px] font-semibold text-stone-900 flex items-center gap-1.5">
              <span className="text-amber-500 text-xs">✨</span>
              <span>Curated Family Collections</span>
            </div>

            {/* Top-Right Floating Badge: Raymond Fabrics Bespoke Suiting with Man in Navy Suit */}
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-20 p-1 rounded-xl bg-white shadow-xl border border-stone-200 text-center w-22 sm:w-28 transform scale-90 sm:scale-100">
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80" 
                alt="Raymond Authorized Fabrics" 
                className="w-full h-14 sm:h-16 object-cover rounded-lg shadow-inner"
              />
              <div className="p-1">
                <div className="text-[9px] sm:text-[10px] font-bold text-stone-900 leading-tight">Raymond Fabrics</div>
                <div className="text-[7px] sm:text-[8px] text-[#9c4238] font-semibold">Bespoke Suiting</div>
              </div>
            </div>

            {/* Bottom Scrim Card inside the hero image */}
            <div className="absolute bottom-2.5 inset-x-2.5 z-20 p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-900/10 text-stone-900 shadow-lg">
              <div className="flex items-center justify-between text-[8px] text-stone-500 mb-0.5">
                <span className="truncate">Ethnic · Suiting · Fabrics</span>
                <span className="text-[#9c4238] font-bold shrink-0 ml-1">All Ages</span>
              </div>
              <h4 className="font-serif text-[10px] sm:text-[11px] font-bold text-stone-900 leading-tight truncate">
                Sarees, Lehengas, Raymond Suiting & Kurtas
              </h4>
              <div className="mt-1 flex items-center justify-between text-[8px]">
                <span className="text-stone-600">Open 10:30 AM – 9:30 PM Today</span>
                <span className="text-[#9c4238] font-bold flex items-center gap-0.5">
                  Explore Items →
                </span>
              </div>
            </div>

            {/* Floating Left Bottom Thumbnail Card: Men's Raw Silk Kurta */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 z-30 p-1 rounded-xl bg-white shadow-xl border border-stone-200 items-center gap-2 max-w-[170px]">
              <img 
                src="https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?auto=format&fit=crop&w=300&q=80" 
                alt="Men's Ethnic Collection" 
                className="w-10 h-12 object-cover object-top rounded-lg"
              />
              <div className="min-w-0 pr-1">
                <div className="text-[9px] font-bold text-stone-900 truncate">Men's Raw Silk Kurta</div>
                <div className="text-[7px] text-stone-500 truncate">Traditional Dhoti & Sherwani</div>
                <div className="text-[7px] text-emerald-700 font-semibold">In Store Stock</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Proof Strip */}
      <div className="relative z-10 pt-2 border-t border-stone-200/90 flex items-center justify-between text-[8px] sm:text-[9px] text-stone-500">
        <span>✓ Nagpur's Premier Garment Destination</span>
        <span>📍 Store Location & Parking Available</span>
      </div>

    </div>
  );
};

// Exact, faithful recreation of the Delight Furniture website hero screenshot:
// Real photograph from the live website (pexels-photo-1571460 warm contemporary living room with sculptural furniture),
// signature gold "d" emblem, "DELIGHT INTERIOR FURNITURE", navigation, editorial typography "Make space for living.",
// and "Explore the collection ↘".
const DelightFurnitureMockup: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1c130e] text-[#f3eee5] flex flex-col justify-between select-none relative overflow-hidden font-sans">
      
      {/* Real Hero Background Image from Delight Furniture Live Site */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=2200" 
          alt="Delight Furniture Contemporary Living Room" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Authentic Multi-stop Warm Amber Vignette from Live Site */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(28,19,14,0.94) 0%, rgba(28,19,14,0.72) 48%, rgba(28,19,14,0.3) 100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c130e]/80 via-transparent to-[#1c130e]/40" />
      </div>

      {/* Top Navbar */}
      <div className="relative z-10 px-4 sm:px-6 pt-4 pb-3 flex items-center justify-between border-b border-[#5a4636]/60 backdrop-blur-xs">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded border border-[#c9a96a] flex items-center justify-center font-serif italic text-[#c9a96a] text-lg bg-black/30">
            d
          </div>
          <div>
            <div className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#f3eee5] leading-none">
              DELIGHT
            </div>
            <div className="text-[7.5px] font-medium tracking-[0.28em] uppercase text-[#b9aa9b] mt-0.5">
              INTERIOR FURNITURE
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="hidden sm:flex items-center gap-5 text-[10px] tracking-[0.16em] text-[#e3d8ca] uppercase font-medium">
          <span className="hover:text-[#c9a96a] transition-colors cursor-pointer">Collection</span>
          <span className="hover:text-[#c9a96a] transition-colors cursor-pointer">Interiors</span>
          <span className="hover:text-[#c9a96a] transition-colors cursor-pointer">Our Approach</span>
          <span className="hover:text-[#c9a96a] transition-colors cursor-pointer">Visit Us</span>
        </div>

        {/* Call Showroom */}
        <a 
          href="tel:+919724218985"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#c9a96a]/15 border border-[#c9a96a]/40 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#c9a96a] hover:bg-[#c9a96a]/25 transition-colors"
        >
          <PhoneCall className="w-3 h-3 text-[#c9a96a]" />
          <span>Call Showroom</span>
        </a>
      </div>

      {/* Hero Showcase Body */}
      <div className="relative z-10 px-4 sm:px-6 my-auto py-4 sm:py-6 space-y-3.5 max-w-lg">
        {/* Eyebrow */}
        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c9a96a] font-semibold flex items-center gap-2">
          <span>Furniture · Interiors · Nagpur</span>
        </div>

        {/* Big Signature Headline */}
        <div className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.04em] text-[#f5efe4] leading-[0.92]">
          Make space <br />
          <span className="font-serif italic font-normal text-[#f5efe4]">for living.</span>
        </div>

        <p className="text-xs sm:text-sm text-[#e3d8ca] leading-relaxed max-w-sm font-light">
          Furniture with a point of view. Interiors designed around the way you actually live.
        </p>

        {/* Action Link & Floating Showroom Tag */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="https://creative-interface-studio--jaibhavani2408.replit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#f5efe4] pb-1.5 border-b border-[#c9a96a] hover:text-[#c9a96a] transition-colors"
          >
            <span>Explore the collection</span>
            <span className="text-[#c9a96a] font-bold">↘</span>
          </a>

          <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-[9px] text-[#e3d8ca]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96a] animate-pulse" />
            <span>Showroom: Opp. Bansi Nagar Metro</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Card: Bespoke Living Showcase */}
      <div className="hidden sm:flex absolute right-4 bottom-12 z-20 p-2 rounded-xl bg-[#261b14]/90 backdrop-blur-md border border-[#c9a96a]/30 shadow-2xl items-center gap-3 max-w-[210px]">
        <img 
          src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Bespoke furniture preview" 
          className="w-11 h-11 object-cover rounded-lg shrink-0 border border-white/10"
        />
        <div className="min-w-0 pr-1">
          <div className="text-[10px] font-bold text-[#f5efe4] truncate">Bespoke Timber & Linen</div>
          <div className="text-[8px] text-[#c9a96a] font-medium truncate">Hand-finished in Nagpur</div>
          <div className="text-[7.5px] text-[#b9aa9b] truncate">Made to fit your scale</div>
        </div>
      </div>

      {/* Bottom Proof Strip */}
      <div className="relative z-10 px-4 sm:px-6 py-2.5 border-t border-[#5a4636]/60 bg-[#1c130e]/70 backdrop-blur-xs flex items-center justify-between text-[8px] sm:text-[9px] text-[#b9aa9b]">
        <span>Shop No. 37, Hingna MIDC Road, Nagpur – 440016</span>
        <div className="flex items-center gap-2 text-[#c9a96a]">
          <span className="tracking-[0.14em] uppercase font-semibold">Scroll to discover</span>
          <span className="w-8 h-px bg-[#c9a96a] inline-block" />
        </div>
      </div>

    </div>
  );
};
