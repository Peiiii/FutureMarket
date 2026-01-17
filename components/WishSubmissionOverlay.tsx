
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { useWishStore } from '../stores/wishStore';
import { usePresenter } from '../contexts/PresenterContext';

const WishSubmissionOverlay: React.FC = () => {
  const isOpen = useWishStore(state => state.isOverlayOpen);
  const presenter = usePresenter();
  const [content, setContent] = useState('');

  // 锁定背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBack = () => {
    presenter.wishManager.closeSubmission();
  };

  const handleSubmit = () => {
    if (content.trim()) {
      presenter.wishManager.submitWish(content);
      setContent('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in slide-in-from-right duration-300">
      {/* 顶部导航栏 */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button onClick={handleBack} className="p-2 -ml-2 text-gray-800">
          <ArrowLeft size={22} />
        </button>
        <h2 className="text-[16px] font-bold">提交未来愿景</h2>
        <button 
          onClick={handleSubmit}
          disabled={!content.trim()}
          className="text-[#ff1a47] font-bold text-sm disabled:opacity-30"
        >
          发布
        </button>
      </div>

      {/* 输入区域 */}
      <div className="flex-1 p-5">
        <div className="flex items-start gap-3 mb-6">
          <img 
            src="https://i.pravatar.cc/150?u=me" 
            className="w-8 h-8 rounded-full bg-gray-100" 
            alt="Me" 
          />
          <div className="flex-1">
            <textarea
              autoFocus
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="在这里写下你对这款产品的期待、建议或疯狂的想法..."
              className="w-full text-[15px] text-gray-800 leading-relaxed focus:outline-none min-h-[200px] resize-none"
            />
          </div>
        </div>

        {/* 提示信息 */}
        <div className="text-[12px] text-gray-400 bg-gray-50 p-4 rounded-xl leading-relaxed">
          <p className="font-bold text-gray-500 mb-1">共创小贴士：</p>
          您的每一条许愿都会被「星际织物研究所」的研发团队看到。优秀的建议将被采纳并获得社区专属「梦想家」勋章。
        </div>
      </div>
    </div>
  );
};

export default WishSubmissionOverlay;
