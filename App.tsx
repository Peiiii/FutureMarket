
import React, { useEffect } from 'react';
import TopHeader from './components/TopHeader';
import ProductGallery from './components/ProductGallery';
import PromotionBanner from './components/PromotionBanner';
import BottomNavBar from './components/BottomNavBar';
import ProductHeader from './components/ProductHeader';
import ConceptInfoCard from './components/ConceptInfoCard';
import CommunityWishes from './components/CommunityWishes';
import WishSubmissionOverlay from './components/WishSubmissionOverlay';
import WishesListOverlay from './components/WishesListOverlay';
import WishlistFeedback from './components/WishlistFeedback';
import WishlistDrawer from './components/WishlistDrawer';
import FutureMarket from './components/FutureMarket'; 
import { PresenterProvider } from './contexts/PresenterContext';
import { presenterInstance } from './presenters/AppPresenter';
import { useProductStore } from './stores/productStore';
import { useNavigationStore } from './stores/navigationStore';

const DetailContent: React.FC = () => {
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
    <div className="animate-in fade-in duration-500">
      <TopHeader />
      <ProductGallery images={currentProduct.images} />
      <PromotionBanner />
      <ProductHeader />
      <ConceptInfoCard />
      <CommunityWishes />
    </div>
  );
};

const AppContent: React.FC = () => {
  const activePage = useNavigationStore(state => state.activePage);

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-24 relative">
      {/* 页面切换逻辑 */}
      {activePage === 'market' ? <FutureMarket /> : <DetailContent />}

      {/* 全局 UI 组件 */}
      <BottomNavBar />
      <WishSubmissionOverlay />
      <WishesListOverlay />
      <WishlistFeedback />
      <WishlistDrawer />
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    presenterInstance.init();
  }, []);

  return (
    <PresenterProvider presenter={presenterInstance}>
      <AppContent />
    </PresenterProvider>
  );
};

export default App;
