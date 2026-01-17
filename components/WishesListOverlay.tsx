
import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquarePlus, Heart } from 'lucide-react';
import { useWishStore } from '../stores/wishStore';
import { usePresenter } from '../contexts/PresenterContext';

const WishesListOverlay: React.FC = () => {
  const isOpen = useWishStore(state => state.isListOverlayOpen);
  const wishes = useWishStore(state => state.wishes);
  const presenter = usePresenter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#f7f7f7] flex flex-col animate-in slide-in-from-right duration-300">
      {/* 顶部导航栏 */}
      <div className="bg-white flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
        <button 
          onClick={() => presenter.wishManager.closeList()} 
          className="p-2 -ml-2 text-gray-800"
        >
          <ArrowLeft size={22} />
        </button>
        <h2 className="text-[16px] font-bold">所有未来愿景</h2>
        <div className="w-8"></div> {/* 占位平衡 */}
      </div>

      {/* 愿景列表内容区 */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        <div className="bg-white rounded-2xl p-5 space-y-8 shadow-sm">
          {wishes.map((wish) => (
            <div key={wish.id} className="flex gap-3">
              <img src={wish.avatar} className="w-10 h-10 rounded-full bg-gray-100 shrink-0" alt={wish.user} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-[14px] text-gray-800">{wish.user}</span>
                  <span className="text-[11px] text-gray-400">{wish.time}</span>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
                  {wish.content}
                </p>
                <div className="flex items-center gap-5">
                  <button className="flex items-center gap-1.5 text-gray-400 hover:text-[#ff1a47] transition-colors">
                    <Heart size={16} />
                    <span className="text-[12px]">{wish.likes > 0 ? wish.likes : '赞'}</span>
                  </button>
                  <button className="text-gray-400 text-[12px]">回复</button>
                </div>
              </div>
            </div>
          ))}
          
          {wishes.length === 0 && (
            <div className="py-20 text-center text-gray-400 text-sm">
              暂时还没有愿景，快来抢占第一个梦想位！
            </div>
          )}
        </div>
        
        <div className="text-center text-[12px] text-gray-300 py-4">
          — 到底了，每个梦想都在闪光 —
        </div>
      </div>

      {/* 底部浮动按钮 */}
      <div className="p-4 bg-white border-t border-gray-100">
        <button 
          onClick={() => presenter.wishManager.openSubmission()}
          className="w-full flex items-center justify-center gap-2 bg-[#ff1a47] text-white py-3 rounded-full text-sm font-bold active:scale-[0.98] transition-transform shadow-lg shadow-[#ff1a47]/20"
        >
          <MessageSquarePlus size={18} />
          <span>我也要许愿</span>
        </button>
      </div>
    </div>
  );
};

export default WishesListOverlay;
