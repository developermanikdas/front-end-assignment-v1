export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
  metric?: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface EdgeItem {
  title: string;
  description: string;
  iconName: string;
}

export interface DomainItem {
  title: string;
  category: string;
  description: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  companySize: string;
  phone: string;
  message?: string;
}

export interface ServerActionResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
