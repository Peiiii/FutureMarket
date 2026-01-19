
import React, { useState } from 'react';
import { Search, Zap, LayoutGrid } from 'lucide-react';
import { FUTURISTIC_PRODUCTS } from '../data/mockData';
import { usePresenter } from '../contexts/PresenterContext';
import Badge from './ui/Badge';

const FutureMarket: React.FC = () => {
  const presenter = usePresenter();
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '运动', '居家', '穿戴', '生态'];

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* 顶部搜索区 */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col">
            <h1 className="text-2xl font-black italic tracking-tighter text-gray-900 flex items-center gap-2">
              FUTURE <span className="text-blue-600 font-light not-italic">MARKET</span>
            </h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
             <Zap size={20} className="text-blue-500 fill-blue-500" />
          </div>
        </div>
        
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="搜索未来的无限可能..."
            className="w-full bg-gray-100/50 border border-transparent focus:border-blue-100 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm outline-none transition-all"
          />
        </div>

        {/* 分类切换 */}
        <div className="flex gap-6 mt-6 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold whitespace-nowrap pb-2 border-b-2 transition-all ${
                activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 产品网格 */}
      <div className="px-4 mt-6 grid grid-cols-2 gap-4">
        {FUTURISTIC_PRODUCTS.map((product) => (
          <div 
            key={product.id}
            onClick={() => presenter.navigationManager.navigateTo('detail', product.id)}
            className="bg-white rounded-[24px] overflow-hidden shadow-sm active:scale-95 transition-transform duration-300 border border-gray-50 flex flex-col"
          >
            <div className="aspect-[4/5] relative">
              <img src={product.images[0]} className="w-full h-full object-cover" alt="" />
              <div className="absolute top-3 left-3">
                 <Badge variant="brand" className="bg-black/20 backdrop-blur-md border-none text-[9px] px-2">
                   {product.brand}
                 </Badge>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur px-2 py-0.5 rounded-lg text-[10px] font-bold text-blue-600">
                  {product.status === 'Conceptual' ? '概念中' : '研制中'}
                </div>
              </div>
            </div>
            <div className="p-3.5 flex-1 flex flex-col">
              <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug mb-2">
                {product.name}
              </h3>
              <div className="mt-auto flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">赞助金</span>
                  <div className="text-[#ff1a47] font-black text-lg leading-none">
                    <span className="text-xs">¥</span>{product.promoPrice}
                  </div>
                </div>
                <div className="text-[9px] text-gray-400 text-right">
                  <span className="text-gray-900 font-bold block">{product.supporterCount}</span>
                  支持者
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 底部空态或加载 */}
      <div className="py-12 flex flex-col items-center justify-center opacity-20">
        <LayoutGrid size={40} className="mb-2" />
        <span className="text-xs font-medium">更多未来蓝图正在生成中</span>
      </div>
    </div>
  );
};

export default FutureMarket;
