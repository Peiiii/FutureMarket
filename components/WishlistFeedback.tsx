
import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useWishlistStore } from '../stores/wishlistStore';
import { usePresenter } from '../contexts/PresenterContext';

const WishlistFeedback: React.FC = () => {
  const isVisible = useWishlistStore(state => state.isToastVisible);
  const productName = useWishlistStore(state => state.lastAddedProductName);
  const presenter = usePresenter();

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-4 right-4 z-[120] animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="bg-white/90 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-500/10 rounded-2xl p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
          <CheckCircle2 className="text-blue-600" size={28} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400 font-medium mb-0.5">量子链接已建立</p>
          <p className="text-sm font-bold text-gray-800 truncate">已加入心愿单：{productName}</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              presenter.wishlistManager.hideToast();
              presenter.wishlistManager.openDrawer();
            }}
            className="text-blue-600 text-xs font-bold whitespace-nowrap px-3 py-1.5 bg-blue-50 rounded-full"
          >
            去查看
          </button>
          <button 
            onClick={() => presenter.wishlistManager.hideToast()}
            className="text-gray-300 p-1"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistFeedback;
