
import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full bg-white">
      {/* 主图 */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200">
        <img 
          src={images[activeIndex]} 
          alt="Product" 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {/* 底部计数器 */}
        <div className="absolute bottom-4 right-4 flex gap-2">
           <div className="bg-black/40 text-white text-[10px] px-2.5 py-1 rounded-full backdrop-blur-md">
             图片 {activeIndex + 1}/{images.length}
           </div>
           <div className="bg-black/40 text-white text-[10px] px-2.5 py-1 rounded-full backdrop-blur-md">
             款式
           </div>
        </div>
      </div>

      {/* 缩略图选择器 */}
      <div className="px-4 py-3 bg-white">
        <div className="flex gap-2 overflow-x-auto no-scrollbar items-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all ${
                activeIndex === idx ? 'border-red-500' : 'border-gray-100'
              } overflow-hidden`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
          <div className="flex-shrink-0 flex flex-col items-center justify-center text-gray-400 px-2">
             <span className="text-[10px] whitespace-nowrap">共 {images.length} 款</span>
             <span className="text-gray-300">›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
