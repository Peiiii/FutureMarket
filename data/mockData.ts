
import { Product, Wish } from '../types';

export const FUTURISTIC_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '「Aether-X」量子共振羽毛球 | 2029 空间实验室联名版',
    brand: '星际织物研究所',
    description: '这不仅是一个挂件，而是人类对“零重力”运动的首次尝试。内置超微型量子谐振器，可捕捉空间微弱能量。目前处于「共研阶段」，你的每一个反馈都将改变最终的物理形态。',
    originalPrice: 199.00,
    promoPrice: 128.80,
    supporterCount: 2840,
    wishCount: 5621,
    estimatedDelivery: '2028年第四季度',
    images: [
      'https://picsum.photos/seed/shuttle1/800/1000',
      'https://picsum.photos/seed/shuttle2/800/1000',
      'https://picsum.photos/seed/shuttle3/800/1000',
      'https://picsum.photos/seed/shuttle4/800/1000',
    ],
    tags: ['蓝图众筹', '设计反馈中', '优先内测权'],
    features: ['研发透明可见', '意见被采纳获勋章', '100% 保证金退还'],
    status: 'Conceptual'
  }
];

export const MOCK_WISHES: Wish[] = [
  {
    id: 'w1',
    user: '林间巡航者',
    avatar: 'https://i.pravatar.cc/150?u=a1',
    content: '希望能量光谱能支持手机App自定义调节，想在球场上发出赛博朋克的紫光！',
    time: '2小时前',
    likes: 234
  },
  {
    id: 'w2',
    user: '代码诗人',
    avatar: 'https://i.pravatar.cc/150?u=a2',
    content: '如果是量子纠缠的话，能不能出一对？其中一个动，另一个在包里也会发出感应的那种。',
    time: '5小时前',
    likes: 189
  },
  {
    id: 'w3',
    user: '不归人',
    avatar: 'https://i.pravatar.cc/150?u=a3',
    content: '建议外壳采用可降解的生物基材料，未来感应该和环保并存。',
    time: '昨天',
    likes: 45
  }
];
