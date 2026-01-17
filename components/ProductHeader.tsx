
import React from 'react';
import { ChevronRight } from 'lucide-react';
import PriceDisplay from './ui/PriceDisplay';
import NewCustomerTag from './ui/NewCustomerTag';
import Badge from './ui/Badge';
import Section from './ui/Section';
import { Product } from '../types';

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  return (
    <Section className="pt-3">
      {/* 价格与销售数量 */}
      <div className="flex items-end justify-between mb-3">
        <div className="flex items-center gap-1 overflow-hidden">
          <PriceDisplay price={product.promoPrice} />
          <NewCustomerTag price="48.8" />
        </div>
        <div className="text-gray-400 text-xs shrink-0 ml-2">
          已售{product.soldCount}
        </div>
      </div>

      {/* 优惠标签 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.tags.map((tag, idx) => (
          <Badge key={idx} variant="outline">{tag}</Badge>
        ))}
        <div className="ml-auto flex items-center text-gray-400">
           <ChevronRight size={16} />
        </div>
      </div>

      {/* 标题 */}
      <h1 className="text-[16px] font-bold leading-relaxed text-[#1a1a1a] mb-4">
        <Badge variant="brand" className="mr-1.5 align-middle font-normal">
          {product.brand}›
        </Badge>
        {product.name}
      </h1>

      {/* 服务标签区 */}
      <div className="flex flex-wrap gap-2">
        {product.features.map((feature, idx) => (
          <Badge 
            key={idx} 
            variant={idx === 0 ? "success" : "secondary"} 
            className="px-2 py-1 rounded"
          >
            {feature}
          </Badge>
        ))}
      </div>
    </Section>
  );
};

export default ProductHeader;
