
import React from 'react';
import { Home, Lightbulb, Share2 } from 'lucide-react';
import ActionButton from './ui/ActionButton';
import { usePresenter } from '../contexts/PresenterContext';
import { useNavigationStore } from '../stores/navigationStore';

const BottomNavBar: React.FC = () => {
  const presenter = usePresenter();
  const activePage = useNavigationStore(state => state.activePage);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl border-t border-gray-100 px-3 py-2 flex items-center justify-between z-[90] pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-5 text-gray-700 ml-2 mr-4 shrink-0">
        <div 
          onClick={() => presenter.navigationManager.navigateTo('market')}
          className="flex flex-col items-center gap-0.5 cursor-pointer active:scale-90 transition-transform"
        >
          <div className={activePage === 'market' ? "text-[#3b82f6]" : "text-gray-400"}><Home size={22} /></div>
          <span className={`text-[10px] whitespace-nowrap font-medium ${activePage === 'market' ? "text-[#3b82f6]" : "text-gray-400"}`}>未来市场</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <Lightbulb size={22} className="text-orange-400" />
          <span className="text-[10px] whitespace-nowrap font-medium text-gray-400">共创</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 cursor-pointer">
          <Share2 size={22} className="text-gray-400" />
          <span className="text-[10px] whitespace-nowrap font-medium text-gray-400">传播</span>
        </div>
      </div>
      
      {/* 仅在详情页显示操作按钮 */}
      {activePage === 'detail' && (
        <div className="flex gap-2 flex-grow animate-in slide-in-from-right duration-300">
          <ActionButton 
            variant="secondary" 
            className="!bg-blue-50 !text-blue-600"
            onClick={() => presenter.wishlistManager.toggleItem()}
          >
            加入心愿单
          </ActionButton>
          <ActionButton 
            variant="primary" 
            className="!from-[#3b82f6] !to-[#2563eb]"
            onClick={() => presenter.productManager.sponsorProject()}
          >
            赞助研发计划
          </ActionButton>
        </div>
      )}
      
      {/* 在市场页显示汇总信息 */}
      {activePage === 'market' && (
        <div className="flex-grow flex justify-end pr-2 animate-in fade-in duration-300">
          <div className="text-[10px] text-gray-400 text-right">
             <span className="text-blue-600 font-bold block">1.2W+</span>
             梦想家在线中
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNavBar;
