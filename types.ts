
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  originalPrice: number;
  promoPrice: number;
  supporterCount: number; // 从 soldCount 更改为支持者数量
  wishCount: number;      // 新增：许愿人数
  estimatedDelivery: string;
  images: string[];
  tags: string[];
  features: string[];
  status: 'Conceptual' | 'Prototyping' | 'Production';
}

export interface Wish {
  id: string;
  user: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
}
