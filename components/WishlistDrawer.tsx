
import React, { useEffect } from 'react';
import { ArrowLeft, Trash2, ExternalLink } from 'lucide-react';
import { useWishlistStore } from '../stores/wishlistStore';
import { useProductStore } from '../stores/productStore';
import { usePresenter } from '../contexts/PresenterContext';
import PriceDisplay from './ui/PriceDisplay';

const WishlistDrawer: React.FC = () => {
  const isOpen = useWishlistStore(state => state.isWishlistDrawerOpen);
  const savedIds = useWishlistStore(state => state.savedProductIds);
  const currentProduct = useProductStore(state => state.currentProduct);
  const presenter = usePresenter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 模拟从 ID 获取产品详情，这里简单处理
  const displayItems = currentProduct && savedIds.includes(currentProduct.id) ? [currentProduct] : [];

  return (
    <div className="fixed inset-0 z-[130] bg-[#f7f7f7] flex flex-col animate-in slide-in-from-bottom duration-500">
      <div className="bg-white px-4 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => presenter.wishlistManager.closeDrawer()} className="p-2 -ml-2">
          <ArrowLeft size={22} />
        </button>
        <h2 className="flex-1 text-center font-bold text-lg mr-8">未来馆藏</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {displayItems.length > 0 ? (
          displayItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
               <img src={item.images[0]} className="w-24 h-24 rounded-xl object-cover bg-gray-50 shrink-0" alt="" />
               <div className="flex-1 flex flex-col justify-between py-1">
                 <div>
                   <h3 className="font-bold text-[15px] text-gray-800 line-clamp-1">{item.name}</h3>
                   <p className="text-[11px] text-blue-500 mt-1 font-medium bg-blue-50 inline-block px-1.5 rounded">
                     {item.status === 'Conceptual' ? '概念研制中' : '量产筹备中'}
                   </p>
                 </div>
                 <div className="flex items-end justify-between">
                    <PriceDisplay price={item.promoPrice} className="scale-75 origin-left" />
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-300"><Trash2 size={16} /></button>
                      <button className="p-2 bg-blue-600 text-white rounded-lg"><ExternalLink size={16} /></button>
                    </div>
                 </div>
               </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-32 opacity-30">
            <div className="w-20 h-20 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center mb-4">
               <ExternalLink size={32} />
            </div>
            <p className="text-sm font-medium">尚未链接任何未来产品</p>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <button 
          onClick={() => presenter.wishlistManager.closeDrawer()}
          className="w-full py-4 bg-gray-900 text-white rounded-full font-bold text-sm shadow-xl"
        >
          继续探索
        </button>
      </div>
    </div>
  );
};

export default WishlistDrawer;
