export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  category: 'supply' | 'logistics' | 'consulting';
  imageUrl: string;
}

export interface Accomplishment {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  projectScope: string;
  timeline: string;
  message?: string;
}
