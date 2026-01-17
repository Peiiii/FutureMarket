
import React from 'react';
import TopHeader from './components/TopHeader';
import ProductGallery from './components/ProductGallery';
import PromotionBanner from './components/PromotionBanner';
import BottomNavBar from './components/BottomNavBar';
import ProductHeader from './components/ProductHeader';
import ConceptInfoCard from './components/ConceptInfoCard';
import CommunityWishes from './components/CommunityWishes';
import { useProduct } from './hooks/useProduct';

const App: React.FC = () => {
  const { product, loading } = useProduct();

  if (loading || !product) {
    return <div className="min-h-screen bg-white flex items-center justify-center">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-24">
      <TopHeader />
      
      {/* 1. 未来蓝图展示区 */}
      <ProductGallery images={product.images} />

      {/* 2. 众筹激励横幅 */}
      <PromotionBanner />

      {/* 3. 核心概念区：基金、愿景、标签 */}
      <ProductHeader product={product} />

      {/* 4. 实验室进度说明 */}
      <ConceptInfoCard product={product} />

      {/* 5. 梦想家社区：反馈与许愿 */}
      <CommunityWishes />

      {/* 6. 底部固定操作栏 */}
      <BottomNavBar />
    </div>
  );
};

export default App;
