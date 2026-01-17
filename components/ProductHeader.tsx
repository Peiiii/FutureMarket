
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import PriceDisplay from './ui/PriceDisplay';
import NewCustomerTag from './ui/NewCustomerTag';
import Badge from './ui/Badge';
import Section from './ui/Section';
import { useProductStore } from '../stores/productStore';

const ProductHeader: React.FC = () => {
  const product = useProductStore(state => state.currentProduct);
  
  if (!product) return null;

  return (
    <Section className="pt-3">
      <div className="flex items-end justify-between mb-3">
        <div className="flex items-center gap-1 overflow-hidden">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-medium">研发赞助金</span>
            <PriceDisplay price={product.promoPrice} />
          </div>
          <NewCustomerTag price="48.8" />
        </div>
        <div className="text-gray-400 text-xs shrink-0 ml-2">
          <span className="text-[#ff1a47] font-bold">{product.supporterCount}</span> 位梦想家已支持
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {product.tags.map((tag, idx) => (
          <Badge key={idx} variant="outline" className="border-blue-100 text-blue-600">
            {idx === 0 && <Sparkles size={10} className="mr-0.5" />}
            {tag}
          </Badge>
        ))}
        <div className="ml-auto flex items-center text-gray-400">
           <span className="text-xs">权益详情</span>
           <ChevronRight size={14} />
        </div>
      </div>

      <h1 className="text-[18px] font-bold leading-relaxed text-[#1a1a1a] mb-4">
        <Badge variant="brand" className="mr-1.5 align-middle font-normal bg-[#3b82f6]">
          {product.brand}
        </Badge>
        {product.name}
      </h1>

      <div className="flex flex-wrap gap-2">
        <Badge variant="success" className="px-2 py-1 rounded bg-green-50 text-green-700">
          全透明研发日志
        </Badge>
        <Badge variant="secondary" className="px-2 py-1 rounded">
          {product.wishCount}人正在共创
        </Badge>
        <Badge variant="secondary" className="px-2 py-1 rounded">
          核心决策权已开放
        </Badge>
      </div>
    </Section>
  );
};

export default ProductHeader;
