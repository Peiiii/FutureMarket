
import React from 'react';
import { Home, Lightbulb, Share2 } from 'lucide-react';
import ActionButton from './ui/ActionButton';
import { usePresenter } from '../contexts/PresenterContext';

const BottomNavBar: React.FC = () => {
  const presenter = usePresenter();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-3 py-2 flex items-center justify-between z-50 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-5 text-gray-700 ml-2 mr-4 shrink-0">
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <div className="text-[#3b82f6]"><Home size={22} /></div>
          <span className="text-[10px] whitespace-nowrap font-medium">实验室</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <Lightbulb size={22} className="text-orange-400" />
          <span className="text-[10px] whitespace-nowrap font-medium">共创</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <Share2 size={22} />
          <span className="text-[10px] whitespace-nowrap font-medium">传播</span>
        </div>
      </div>
      
      <div className="flex gap-2 flex-grow">
        <ActionButton 
          variant="secondary" 
          className="!bg-orange-50 !text-orange-600"
          onClick={() => presenter.productManager.submitWish('User wants to join wishlist')}
        >
          加入许愿单
        </ActionButton>
        <ActionButton 
          variant="primary" 
          className="!from-[#3b82f6] !to-[#2563eb]"
          onClick={() => presenter.productManager.sponsorProject()}
        >
          赞助研发计划
        </ActionButton>
      </div>
    </div>
  );
};

export default BottomNavBar;
