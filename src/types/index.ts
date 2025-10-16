export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  popular: boolean;
  gradient: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  timeSlot: string;
}

export interface CampaignFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  goals: string;
  additionalInfo: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface TimeSlot {
  value: string;
  label: string;
}
