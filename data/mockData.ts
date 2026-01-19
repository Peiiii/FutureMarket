
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
    images: ['https://picsum.photos/seed/shuttle1/800/1000'],
    tags: ['蓝图众筹', '设计反馈中', '优先内测权'],
    features: ['研发透明可见', '意见被采纳获勋章', '100% 保证金退还'],
    status: 'Conceptual'
  },
  {
    id: '2',
    name: '「Nebula」意识流降噪睡舱 | 2.0 个人端版本',
    brand: '极光神经科技',
    description: '通过40Hz共振技术实现主动意识降噪。这不只是床，更是你通往深海睡眠的稳定舱。',
    originalPrice: 12999,
    promoPrice: 8999,
    supporterCount: 452,
    wishCount: 12400,
    estimatedDelivery: '2026年夏季',
    images: ['https://picsum.photos/seed/sleep1/800/1000'],
    tags: ['概念阶段', '黑科技', '限量500台'],
    features: ['脑电波监控', '全息梦境引导'],
    status: 'Prototyping'
  },
  {
    id: '3',
    name: '「Chronos」液态金属模块化腕表',
    brand: '熵增实验室',
    description: '表带由感温液态金属构成，能根据你的情绪脉搏实时调整松紧度和形态。',
    originalPrice: 4500,
    promoPrice: 3200,
    supporterCount: 1205,
    wishCount: 8900,
    estimatedDelivery: '2027年秋季',
    images: ['https://picsum.photos/seed/watch1/800/1000'],
    tags: ['量产预备', '穿戴革命'],
    features: ['触觉反馈', '自主调节'],
    status: 'Production'
  },
  {
    id: '4',
    name: '「Flora」生物合成氧气瓶（盆栽版）',
    brand: '新纪元生态',
    description: '将亚马逊雨林的氧气浓度浓缩在桌面盆栽中，通过转基因发光植物提供持续24小时的新鲜负氧离子。',
    originalPrice: 899,
    promoPrice: 599,
    supporterCount: 5600,
    wishCount: 15000,
    estimatedDelivery: '2025年冬季',
    images: ['https://picsum.photos/seed/plant1/800/1000'],
    tags: ['爆款预订', '生态家居'],
    features: ['自发光', '净化循环'],
    status: 'Production'
  }
];

export const MOCK_WISHES: Wish[] = [
  { id: 'w1', user: '林间巡航者', avatar: 'https://i.pravatar.cc/150?u=a1', content: '希望能量光谱能支持手机App自定义调节！', time: '2小时前', likes: 234 },
  { id: 'w2', user: '代码诗人', avatar: 'https://i.pravatar.cc/150?u=a2', content: '如果是量子纠缠的话，能不能出一对？', time: '5小时前', likes: 189 },
];
