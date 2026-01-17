
import React from 'react';
import { ChevronRight } from 'lucide-react';

const PromotionBanner: React.FC = () => {
  return (
    <div className="bg-[#fff9e6] py-3.5 px-4 flex items-center justify-between mb-0 border-b border-yellow-100">
      <div className="flex items-center gap-2">
        <span className="text-[#333] font-bold text-[15px]">超级满减</span>
        <span className="text-[#a68a00] text-[13px]">全场每满 <span className="font-bold">200-30</span></span>
      </div>
      <button className="text-[#a68a00] text-[13px] flex items-center gap-0.5">
        去逛逛 <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default PromotionBanner;
