
import React from 'react';
import TopHeader from './components/TopHeader';
import ProductGallery from './components/ProductGallery';
import PromotionBanner from './components/PromotionBanner';
import BottomNavBar from './components/BottomNavBar';
import { FUTURISTIC_PRODUCTS } from './data/mockData';
import { ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const product = FUTURISTIC_PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-24">
      <TopHeader />
      
      {/* 1. 商品画廊 */}
      <ProductGallery images={product.images} />

      {/* 2. 超级满减横幅 */}
      <PromotionBanner />

      {/* 3. 商品详情核心区 */}
      <div className="bg-white px-4 pt-3 pb-5">
        {/* 价格与销售数量 */}
        <div className="flex items-end justify-between mb-3">
          <div className="flex items-center gap-1">
            <span className="text-[#ff1a47] text-lg font-bold">¥</span>
            <span className="text-[#ff1a47] text-3xl font-bold font-sans">66</span>
            <span className="text-[#ff1a47] text-lg font-bold -ml-1">.8</span>
            
            {/* 新客价标签 */}
            <div className="ml-2 flex items-center overflow-hidden rounded-full bg-[#ff1a47] text-white">
               <div className="bg-[#ff4d6d] px-1.5 py-0.5 flex items-center">
                  <span className="text-[10px] transform scale-90">⚡</span>
                  <span className="text-[11px] font-medium">新客价</span>
               </div>
               <div className="px-2 py-0.5 text-[15px] font-bold bg-[#ff1a47]">
                 ¥48.8
               </div>
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            已售{product.soldCount}
          </div>
        </div>

        {/* 优惠标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="border border-[#ffccc7] text-[#ff4d4f] text-[11px] px-1.5 py-0.5 rounded-sm">
            跨店每满200减30
          </span>
          <span className="border border-[#ffccc7] text-[#ff4d4f] text-[11px] px-1.5 py-0.5 rounded-sm">
            平台券立减8元
          </span>
          <div className="ml-auto flex items-center text-gray-400">
             <ChevronRight size={16} />
          </div>
        </div>

        {/* 标题 */}
        <h1 className="text-[16px] font-bold leading-relaxed text-[#1a1a1a] mb-4">
          <span className="bg-[#00705a] text-white text-[11px] px-1.5 py-0.5 rounded-sm mr-1.5 align-middle font-normal">
            友好市集›
          </span>
          {product.name}
        </h1>

        {/* 服务标签区 */}
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="bg-[#f2fbf7] text-[#00b26a] text-[11px] px-2 py-1 rounded">
            退货包运费
          </span>
          <span className="bg-[#f5f7fa] text-[#606266] text-[11px] px-2 py-1 rounded">
            近30天新增250+条好评
          </span>
          <span className="bg-[#f5f7fa] text-[#606266] text-[11px] px-2 py-1 rounded">
            近30天5000+人愿
          </span>
        </div>
      </div>

      {/* 4. 概念性描述卡片 */}
      <div className="mt-2 bg-white px-4 py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[15px]">概念设计说明</h2>
          <span className="text-xs text-gray-400">了解项目进度</span>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-sm leading-relaxed text-blue-900">
           <div className="font-bold mb-1 flex items-center gap-2">
             <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">预警平台公告</span>
             这是一项预备性生产计划
           </div>
           本产品目前仅存在于设计蓝图阶段。您所支付的费用将作为“研发赞助金”进入监管账户。
           <div className="mt-3 flex gap-4 text-xs font-medium">
             <div>预计量产: <span className="text-blue-700">{product.estimatedDelivery}</span></div>
             <div>目前状态: <span className="text-blue-700">原理机调试中</span></div>
           </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default App;
