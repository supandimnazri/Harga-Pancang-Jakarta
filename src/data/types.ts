export interface PricingItem {
  category: string;
  item: string;
  dimension: string;
  length: string;
  concreteQuality: string;
  estimatedPrice: string;
  unit: string;
  notes: string;
}

export interface ServicePriceItem {
  method: string;
  capacityOrType: string;
  pricePerMeter: string;
  minChargeOrSetup: string;
  characteristics: string;
  suitableFor: string;
}

export interface PileTypeInfo {
  id: string;
  name: string;
  title: string;
  image?: string;
  definition: string;
  function: string;
  advantages: string[];
  commonUses: string[];
  specification: string;
}

export interface MethodInfo {
  id: string;
  name: string;
  fullName: string;
  noiseLevel: string;
  vibrationLevel: string;
  speed: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  urbanJakartaSuitability: string;
}

export interface AreaInfo {
  name: string;
  region: 'DKI Jakarta' | 'Bodetabek';
  soilCharacteristics: string;
  recommendedMethod: string;
  coverageSubdistricts: string[];
  commonProjects: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  seoTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  content: string[];
  faq?: FaqItem[];
  relatedSlugs: string[];
}
