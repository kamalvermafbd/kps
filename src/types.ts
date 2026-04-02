export interface Service {
  slug: string;
  service_name: string;
  short_summary: string;
  symptoms: string[];
  hero_image_prompt: string;
  card_image_prompt: string;
  faq_json: { q: string; a: string }[];
  seo_title: string;
  seo_description: string;
  city: string;
  is_active: boolean;
}

export interface Appointment {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  city: string;
  whatsappConsent: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_prompt: string;
  date: string;
}
