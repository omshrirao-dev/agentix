import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ArrowUp, 
  MapPin, 
  Calendar, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    emailOrPhone: '',
    serviceInterest: 'Website Design & Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.emailOrPhone) return;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp quick link for +91 9511295864
  const whatsappUrl = `https://wa.me/919511295864?text=${encodeURIComponent(
    `Hello Om, I came across your AgentiX portfolio and I'd like to discuss a project regarding ${formState.serviceInterest}.`
  )}`;

  return (
    <footer id="contact" className="relative pt-12 pb-10 overflow-hidden">
      
      {/* Glow highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glassmorphism Contact Card */}
        <div className="relative rounded-3xl bg-[#18052d]/85 backdrop-blur-2xl border border-fuchsia-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-purple-950/80 mb-10 overflow-hidden">
          
          {/* Ambient Corner Glow */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-tr from-fuchsia-600/30 to-purple-600/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Om Shrirao Profile & Contact Info */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/80 border border-fuchsia-400/30 text-xs font-semibold text-fuchsia-300 uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                  Ready to Grow Your Business?
                </div>
                
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
                  Let's Build Something <span className="bg-gradient-to-r from-fuchsia-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">Extraordinary</span>
                </h3>
                
                <p className="text-base text-slate-300 font-normal leading-relaxed max-w-lg">
                  Whether you need a high-converting local business website, top Google rankings, 
                  or viral Instagram VFX content, reach out directly to me.
                </p>
              </div>

              {/* Founder Details Glass Container */}
              <div className="p-6 rounded-2xl bg-[#120323]/90 border border-fuchsia-500/25 space-y-5">
                
                {/* Name & Title */}
                <div>
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-sm font-semibold text-fuchsia-300 font-heading">
                    {PERSONAL_INFO.role}
                  </div>
                </div>

                {/* Clickable Phone Number with Interactive Hover */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fuchsia-400/50 hover:bg-fuchsia-950/40 transition-all duration-200 group">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-3.5 text-slate-200 group-hover:text-white"
                  >
                    <div className="p-2.5 rounded-lg bg-fuchsia-950/80 border border-fuchsia-500/30 text-fuchsia-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">
                        Contact Number (Call Direct)
                      </div>
                      <div className="text-base font-bold text-white font-mono group-hover:text-fuchsia-300 transition-colors">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </a>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Clickable Email Address with Interactive Hover */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-fuchsia-400/50 hover:bg-fuchsia-950/40 transition-all duration-200 group">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3.5 text-slate-200 group-hover:text-white truncate"
                  >
                    <div className="p-2.5 rounded-lg bg-fuchsia-950/80 border border-fuchsia-500/30 text-fuchsia-400 group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">
                        Email Address
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-fuchsia-300 transition-colors truncate">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </a>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Instant WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

              </div>

            </div>

            {/* Right Column: Direct Project Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#110221]/90 border border-fuchsia-500/25 p-7 sm:p-8 space-y-6">
                
                <div className="border-b border-white/10 pb-4">
                  <div className="text-lg font-bold text-white font-heading">
                    Send a Quick Project Inquiry
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Guaranteed response within 4 hours.
                  </div>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                      <Check className="w-7 h-7" />
                    </div>
                    <div className="text-xl font-bold text-white font-heading">
                      Message Received!
                    </div>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto">
                      Thank you! Om Shrirao will reach out to you directly via call or WhatsApp shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-4 py-2 text-xs font-semibold text-fuchsia-300 hover:text-white underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma (Royal Furnishings)"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-fuchsia-400 focus:outline-none text-white text-sm placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number or Email Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+91 98765 43210 or name@business.com"
                        value={formState.emailOrPhone}
                        onChange={(e) => setFormState({ ...formState, emailOrPhone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-fuchsia-400 focus:outline-none text-white text-sm placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formState.serviceInterest}
                        onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#1b0632] border border-white/10 focus:border-fuchsia-400 focus:outline-none text-white text-sm"
                      >
                        <option value="Website Design & Development">Website Design & Development</option>
                        <option value="SEO & Google Top Ranking">SEO & Google Top Ranking</option>
                        <option value="Instagram VFX Reels & Content">Instagram VFX Reels & Content</option>
                        <option value="Festival & Seasonal VFX Campaign">Festival & Seasonal VFX Campaign</option>
                        <option value="Complete Agency Growth Package">Complete Agency Growth Package (All-in-One)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Project Brief / Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell me a bit about your business and goals..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-fuchsia-400 focus:outline-none text-white text-sm placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-fuchsia-950/60 hover:shadow-fuchsia-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Free Strategy Call</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-white">AgentiX</span>
            <span>·</span>
            <span>Crafted by {PERSONAL_INFO.name} ({PERSONAL_INFO.role})</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#websites" className="hover:text-fuchsia-300 transition-colors">Websites</a>
            <a href="#seo" className="hover:text-fuchsia-300 transition-colors">SEO</a>
            <a href="#social-media" className="hover:text-fuchsia-300 transition-colors">Marketing</a>
            <a href="#reels" className="hover:text-fuchsia-300 transition-colors">Reels</a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
