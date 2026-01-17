
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  originalPrice: number;
  promoPrice: number;
  soldCount: number;
  estimatedDelivery: string;
  images: string[];
  tags: string[];
  features: string[];
  status: 'Conceptual' | 'Prototyping' | 'Production';
}

export interface Promotion {
  title: string;
  subtitle: string;
  highlight: string;
}
