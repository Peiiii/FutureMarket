
import React from 'react';
import { Home, MessageCircle, ShoppingCart } from 'lucide-react';
import ActionButton from './ui/ActionButton';

const BottomNavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-3 py-2 flex items-center justify-between z-50 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-4 text-gray-700 ml-1 mr-3 shrink-0">
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <div className="text-[#f12b6b]"><Home size={22} /></div>
          <span className="text-[10px] whitespace-nowrap">店铺</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <MessageCircle size={22} />
          <span className="text-[10px] whitespace-nowrap">客服</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <ShoppingCart size={22} />
          <span className="text-[10px] whitespace-nowrap">购物车</span>
        </div>
      </div>
      
      <div className="flex gap-2 flex-grow">
        <ActionButton variant="secondary">
          加入购物车
        </ActionButton>
        <ActionButton variant="primary">
          领券预定
        </ActionButton>
      </div>
    </div>
  );
};

export default BottomNavBar;
