
import React from 'react';
import TopHeader from './components/TopHeader';
import ProductGallery from './components/ProductGallery';
import PromotionBanner from './components/PromotionBanner';
import BottomNavBar from './components/BottomNavBar';
import ProductHeader from './components/ProductHeader';
import ConceptInfoCard from './components/ConceptInfoCard';
import { useProduct } from './hooks/useProduct';

const App: React.FC = () => {
  const { product, loading } = useProduct();

  if (loading || !product) {
    return <div className="min-h-screen bg-white flex items-center justify-center">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-24">
      <TopHeader />
      
      {/* 1. 商品大图轮播区 */}
      <ProductGallery images={product.images} />

      {/* 2. 活动/满减横幅 */}
      <PromotionBanner />

      {/* 3. 核心信息区：价格、标题、标签 */}
      <ProductHeader product={product} />

      {/* 4. 概念产品状态与说明区 */}
      <ConceptInfoCard product={product} />

      {/* 5. 底部固定操作栏 */}
      <BottomNavBar />
    </div>
  );
};

export default App;
