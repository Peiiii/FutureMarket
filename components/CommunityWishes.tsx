
import React from 'react';
import Section from './ui/Section';
import Badge from './ui/Badge';
import { useWishStore } from '../stores/wishStore';
import { usePresenter } from '../contexts/PresenterContext';
import { Heart, MessageSquarePlus } from 'lucide-react';

const CommunityWishes: React.FC = () => {
  const wishes = useWishStore(state => state.wishes);
  const presenter = usePresenter();

  return (
    <Section className="mt-2 mb-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-[16px]">未来许愿池</h2>
          <Badge variant="outline" className="text-[#ff1a47] border-[#ff1a47]/20 bg-[#ff1a47]/5">
            {wishes.length}个愿景
          </Badge>
        </div>
        <button 
          onClick={() => presenter.wishManager.openSubmission()}
          className="flex items-center gap-1 text-[#ff1a47] text-sm font-bold active:opacity-70"
        >
          <MessageSquarePlus size={16} />
          <span>我要许愿</span>
        </button>
      </div>

      <div className="space-y-6">
        {wishes.map((wish) => (
          <div key={wish.id} className="flex gap-3 animate-in fade-in duration-500">
            <img src={wish.avatar} className="w-9 h-9 rounded-full bg-gray-100 shrink-0" alt={wish.user} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-gray-800">{wish.user}</span>
                <span className="text-[10px] text-gray-400">{wish.time}</span>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-2">
                {wish.content}
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-400 hover:text-[#ff1a47] transition-colors">
                  <Heart size={14} />
                  <span className="text-[11px]">{wish.likes}</span>
                </button>
                <button className="text-gray-400 text-[11px]">回复</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 border border-gray-100 rounded-lg text-gray-400 text-sm font-medium active:bg-gray-50 transition-colors">
        查看更多梦想家的提议 ›
      </button>
    </Section>
  );
};

export default CommunityWishes;
