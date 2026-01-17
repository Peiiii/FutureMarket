
import React, { useEffect } from 'react';
import TopHeader from './components/TopHeader';
import ProductGallery from './components/ProductGallery';
import PromotionBanner from './components/PromotionBanner';
import BottomNavBar from './components/BottomNavBar';
import ProductHeader from './components/ProductHeader';
import ConceptInfoCard from './components/ConceptInfoCard';
import CommunityWishes from './components/CommunityWishes';
import WishSubmissionOverlay from './components/WishSubmissionOverlay';
import { PresenterProvider } from './contexts/PresenterContext';
import { presenterInstance } from './presenters/AppPresenter';
import { useProductStore } from './stores/productStore';

// 业务编排层：负责整体页面结构的组织
const AppContent: React.FC = () => {
  const { currentProduct, loading } = useProductStore();

  if (loading || !currentProduct) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <div className="w-8 h-8 border-4 border-[#3b82f6] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-400 text-sm">链接未来中...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-24 relative">
      <TopHeader />
      
      {/* 模块：视觉展示层 */}
      <ProductGallery images={currentProduct.images} />

      {/* 模块：运营激励层 */}
      <PromotionBanner />

      {/* 模块：核心信息层 */}
      <ProductHeader />

      {/* 模块：详情说明层 */}
      <ConceptInfoCard />

      {/* 模块：共创社区层 */}
      <CommunityWishes />

      {/* 全局导航控制 */}
      <BottomNavBar />

      {/* 独立业务浮层：许愿发布页 */}
      <WishSubmissionOverlay />
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // 初始引导
    presenterInstance.init();
  }, []);

  return (
    <PresenterProvider presenter={presenterInstance}>
      <AppContent />
    </PresenterProvider>
  );
};

export default App;
