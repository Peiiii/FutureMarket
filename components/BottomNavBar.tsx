
import React from 'react';
import { Home, MessageCircle, ShoppingCart } from 'lucide-react';

const BottomNavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-3 py-2 flex items-center justify-between z-50 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-5 text-gray-700 ml-1 mr-4">
        <div className="flex flex-col items-center gap-0.5">
          <div className="text-[#f12b6b]"><Home size={22} /></div>
          <span className="text-[10px]">店铺</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <MessageCircle size={22} />
          <span className="text-[10px]">客服</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <ShoppingCart size={22} />
          <span className="text-[10px]">购物车</span>
        </div>
      </div>
      
      <div className="flex gap-2 flex-grow">
        <button className="flex-1 bg-[#fff0f3] text-[#ff4d6d] font-bold py-3 px-4 rounded-full text-[14px]">
          加入购物车
        </button>
        <button className="flex-1 bg-gradient-to-r from-[#ff4d6d] to-[#ff1a47] text-white font-bold py-3 px-4 rounded-full text-[14px]">
          领券预定
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;
