import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Check, 
  Globe 
} from 'lucide-react';
import { ProjectWebsite } from '../types';

interface LiveWebsiteModalProps {
  project: ProjectWebsite | null;
  onClose: () => void;
}

export const LiveWebsiteModal: React.FC<LiveWebsiteModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  const deviceWidthClasses = {
    desktop: 'w-full max-w-5xl h-[560px]',
    tablet: 'w-[768px] max-w-full h-[560px]',
    mobile: 'w-[375px] max-w-full h-[580px]'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl bg-[#130324] border border-fuchsia-500/40 shadow-2xl shadow-purple-950 overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#0e021a] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-fuchsia-600/30 border border-fuchsia-500/40 text-fuchsia-300">
              <Globe className="w-4 h-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-white font-heading">
                {project.title}
              </div>
              <div className="text-xs text-fuchsia-300/80">
                {project.category} · {project.tagline}
              </div>
            </div>
          </div>

          {/* Responsive Viewport Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-black/50 border border-white/10">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                deviceMode === 'desktop' ? 'bg-fuchsia-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                deviceMode === 'tablet' ? 'bg-fuchsia-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                deviceMode === 'mobile' ? 'bg-fuchsia-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-lg shadow-sm"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Simulation Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-[#07010e]">
          <div className={`${deviceWidthClasses[deviceMode]} transition-all duration-300 rounded-2xl overflow-hidden border border-fuchsia-500/30 bg-slate-950 shadow-2xl flex flex-col`}>
            
            {/* Viewport Chrome */}
            <div className="px-4 py-2 bg-[#120324] border-b border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="truncate font-mono text-[10px] text-slate-300 max-w-xs">
                {project.url}
              </div>
              <span className="text-[10px] text-emerald-400">Live Website</span>
            </div>

            {/* Embedded Iframe Preview */}
            <div className="flex-1 w-full h-full relative bg-slate-900 overflow-hidden">
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="px-6 py-3.5 bg-[#0e021a] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-fuchsia-400 font-semibold">Features:</span>
            {project.features.slice(0, 3).map((item, idx) => (
              <span key={idx} className="flex items-center gap-1 text-[11px]">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          <div className="text-[11px] text-slate-400">
            Engineered by <span className="text-white font-medium">Om Shrirao (AgentiX)</span>
          </div>
        </div>

      </div>
    </div>
  );
};
