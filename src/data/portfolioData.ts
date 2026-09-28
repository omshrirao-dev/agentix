import { ProjectWebsite, InstagramReel, SeoFeature, SocialPillar } from '../types';

export const PERSONAL_INFO = {
  name: "Om Shrirao",
  role: "Founder of AgentiX",
  agency: "AgentiX",
  phone: "+91 9511295864",
  email: "omshrirao78@gmail.com",
  location: "Maharashtra, India",
  tagline: "High-Converting Websites, Top-Tier SEO & Viral VFX Content For Local Brands",
  expertise: [
    "Content Creator",
    "Website Designer",
    "Social Media Marketing Expert & Manager"
  ]
};

// ONLY the 2 real client websites built by Om Shrirao:
// 1. https://chowdharilifestyle.vercel.app/
// 2. Delight Furniture (URL: https://creative-interface-studio--jaibhavani2408.replit.app/)
export const WEBSITES_DATA: ProjectWebsite[] = [
  {
    id: "chaudhari-lifestyle",
    title: "Chaudhari Lifestyle",
    category: "Nagpur Family Garments & Fine Textiles",
    niche: "Fashion",
    url: "https://chowdharilifestyle.vercel.app/",
    isRealLink: true,
    tagline: "Elegance for Every Generation.",
    description: "Fine ethnic wear, bespoke suiting, and fabrics for men, women, and kids. Built with modern digital catalog navigation, WhatsApp instant inquiry integration, and optimized responsive presentation for local store walk-ins and orders.",
    features: [
      "Curated Family Collections (Kurtas, Lehengas, Raymond Suiting)",
      "Instant WhatsApp Inquiry & Query/Booking Modal",
      "Interactive Product Catalog with Lookbook Filters",
      "Fast, Mobile-First Responsive Architecture"
    ],
    colorAccent: "#e879f9",
    screenshotTheme: "fashion"
  },
  {
    id: "delight-furniture",
    title: "Delight Furniture",
    category: "Interior Furniture & Showroom",
    niche: "Furniture",
    url: "https://creative-interface-studio--jaibhavani2408.replit.app/",
    isRealLink: true,
    tagline: "Make space for living.",
    description: "Furniture with a point of view. Bespoke interiors and crafted living spaces designed around the way you actually live. Built with sleek luxury architectural typography, immersive room photography showcases, and direct showroom call buttons.",
    features: [
      "Bespoke Living Room, Dining & Interior Showcases",
      "Direct 'Call Showroom' One-Tap Integration",
      "Minimalist Dark Luxury Typography & Visual Layout",
      "Architectural Portfolio Presentation"
    ],
    colorAccent: "#c084fc",
    screenshotTheme: "furniture"
  }
];

export const SEO_POINTS: SeoFeature[] = [
  {
    title: "Semantic & Clean Code Architecture",
    description: "Clean HTML5 structural hierarchy, structured schema data, and fast server-ready layouts that make it easy for Google crawlers to index every service, product, and location.",
    iconName: "Code2"
  },
  {
    title: "Mobile-First Optimization",
    description: "Most customers browse and discover businesses on their phones. We build responsive, touch-friendly layouts with quick call and WhatsApp actions that work seamlessly on mobile screens.",
    iconName: "Smartphone"
  },
  {
    title: "Lightning-Fast Load Times",
    description: "Clean, unbloated code and modern asset delivery keep load times ultra-quick. Fast-loading pages reduce visitor bounce rates and keep prospective clients engaged.",
    iconName: "Zap"
  },
  {
    title: "Strategic Keyword Integration",
    description: "Keyword structuring aligned with what real local customers search for, targeted precisely to your business niche to help your website rank on Google search.",
    iconName: "Target"
  }
];

export const SOCIAL_MARKETING_POINTS: SocialPillar[] = [
  {
    title: "End-to-End Instagram Account Management & Growth",
    description: "Consistent publishing schedules, story engagement, post design, and direct inquiry management to handle your brand's active social presence.",
    tag: "Full-Funnel Management"
  },
  {
    title: "High-Quality, VFX-Driven Graphic Reels & Video Content",
    description: "Eye-catching vertical videos with motion graphics, clean sound design, and creative transitions crafted to hold viewer attention.",
    tag: "VFX & Motion Design"
  },
  {
    title: "Targeted Local Marketing to Rank Your Business",
    description: "Strategic geographic targeting, local hashtags, and localized content angles designed to connect your business with audiences in your city and surrounding areas.",
    tag: "Local Marketing"
  },
  {
    title: "Custom Content Strategies Designed to Convert",
    description: "Content specifically planned to drive direct customer inquiries, phone calls, WhatsApp messages, and showroom visits.",
    tag: "Conversion-Focused"
  }
];

export const TARGET_NICHES = [
  {
    name: "Furniture & Decor Stores",
    description: "Showcasing craftsmanship, wood finishes, and living space transformations for interior buyers.",
    icon: "Armchair"
  },
  {
    name: "Restaurants & Cafes",
    description: "Appetizing culinary showcases, aesthetic ambience videos, and dining highlights.",
    icon: "Utensils"
  },
  {
    name: "Fashion & Clothing Brands",
    description: "Dynamic garment showcases, festive collections, and trend lookbooks.",
    icon: "Shirt"
  }
];

// Playable vertical reel showcase for client campaigns
export const REELS_DATA: InstagramReel[] = [
  {
    id: "reel-1",
    title: "Client Portfolio Short Reel",
    clientNiche: "Brand Scaling",
    duration: "0:30",
    audioTrack: "Original Sound - AgentiX Audio",
    videoUrl: "https://www.youtube.com/embed/RUE0ORlUMS0",
    youtubeId: "RUE0ORlUMS0",
    thumbnailUrl: "https://img.youtube.com/vi/RUE0ORlUMS0/hqdefault.jpg",
    caption: "High-retention vertical portfolio reel engineered for viral reach, cinematic pacing, and client conversion.",
    tags: ["#AgentiX", "#PortfolioReel", "#YouTubeShorts", "#ViralMarketing"]
  },
  {
    id: "reel-2",
    title: "Handcrafted Teak Furniture & Living Space",
    clientNiche: "Furniture & Interiors",
    duration: "0:18",
    audioTrack: "Atmospheric Soundscape",
    videoUrl: "https://www.youtube.com/embed/Yp__y9Qx7jc",
    youtubeId: "Yp__y9Qx7jc",
    thumbnailUrl: "https://img.youtube.com/vi/Yp__y9Qx7jc/hqdefault.jpg",
    caption: "Showcasing solid wood textures, interior room staging, and architectural finishes.",
    tags: ["#FurnitureDesign", "#InteriorVFX", "#NagpurHomes"]
  },
  {
    id: "reel-3",
    title: "VFX & Creative Motion Showcase",
    clientNiche: "Brand Scaling",
    duration: "0:25",
    audioTrack: "Original Sound - Om Shrirao",
    videoUrl: "https://www.youtube.com/embed/NX7dqj_L5iE",
    youtubeId: "NX7dqj_L5iE",
    thumbnailUrl: "https://img.youtube.com/vi/NX7dqj_L5iE/hqdefault.jpg",
    caption: "High-retention vertical VFX storytelling, kinetic animations, and cinematic brand pacing.",
    tags: ["#VFX", "#AgentiX", "#MotionDesign", "#YouTubeShorts"]
  },
  {
    id: "reel-4",
    title: "Brand Motion & Kinetic Graphic Reel",
    clientNiche: "Brand Scaling",
    duration: "0:20",
    audioTrack: "Original Sound - Om Shrirao",
    videoUrl: "https://www.youtube.com/embed/5ttYv6LGBt8",
    youtubeId: "5ttYv6LGBt8",
    thumbnailUrl: "https://img.youtube.com/vi/5ttYv6LGBt8/hqdefault.jpg",
    caption: "Dynamic typography animations, VFX cuts, and localized business call-to-actions.",
    tags: ["#MotionGraphics", "#AgentiX", "#BrandGrowth", "#YouTubeShorts"]
  }
];
