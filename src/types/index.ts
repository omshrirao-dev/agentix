export interface ProjectWebsite {
  id: string;
  title: string;
  category: string;
  niche: 'Fashion' | 'Furniture';
  url: string;
  isRealLink: boolean;
  tagline: string;
  description: string;
  features: string[];
  colorAccent: string;
  screenshotTheme: 'fashion' | 'furniture';
}

export interface InstagramReel {
  id: string;
  title: string;
  clientNiche: string;
  duration: string;
  audioTrack: string;
  videoUrl: string;
  caption: string;
  isUploadedReel?: boolean;
  tags?: string[];
  youtubeId?: string;
  thumbnailUrl?: string;
}

export interface SeoFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface SocialPillar {
  title: string;
  description: string;
  tag: string;
}
