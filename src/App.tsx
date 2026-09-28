/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WebsitesSection } from './components/WebsitesSection';
import { SeoSection } from './components/SeoSection';
import { SocialMarketingSection } from './components/SocialMarketingSection';
import { ReelsSection } from './components/ReelsSection';
import { ContactFooter } from './components/ContactFooter';
import { LiveWebsiteModal } from './components/LiveWebsiteModal';
import { ReelModal } from './components/ReelModal';
import { ProjectWebsite, InstagramReel } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectWebsite | null>(null);
  const [expandedReel, setExpandedReel] = useState<InstagramReel | null>(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090114] text-slate-100 relative selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      {/* Dynamic Cosmic Gradient Background extracted from user uploaded image */}
      <CosmicBackground />

      {/* Main Top Bar Contract Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Content Stream */}
      <main className="relative z-10">
        {/* 1. Hero / Introduction Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. What We Do: End-to-End Website Design & Development */}
        <WebsitesSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. SEO (Search Engine Optimization) Mastery */}
        <SeoSection />

        {/* 4. Social Media Marketing & VFX Content Creation */}
        <SocialMarketingSection />

        {/* 5. Instagram Reels Portfolio (Playable Video Section) */}
        <ReelsSection onExpandReel={(reel) => setExpandedReel(reel)} />
      </main>

      {/* 6. Contact Details (Footer Section) */}
      <ContactFooter />

      {/* Interactive Modals */}
      <LiveWebsiteModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ReelModal 
        reel={expandedReel} 
        onClose={() => setExpandedReel(null)} 
      />
    </div>
  );
}
