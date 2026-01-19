
import React from 'react';
import { ArrowLeft, Search, Share2, Star } from 'lucide-react';
import { usePresenter } from '../contexts/PresenterContext';

const TopHeader: React.FC = () => {
  const presenter = usePresenter();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 pointer-events-none">
      <div className="flex gap-2 pointer-events-auto">
        <button 
          onClick={() => presenter.navigationManager.goBack()}
          className="w-9 h-9 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white rounded-full active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
      </div>
      <div className="flex gap-3 pointer-events-auto">
        <button className="w-9 h-9 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white rounded-full">
          <Search size={20} strokeWidth={2.5} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white rounded-full">
          <Star size={20} strokeWidth={2.5} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white rounded-full">
          <Share2 size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
