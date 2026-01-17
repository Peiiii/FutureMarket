
import React from 'react';
import Section from './ui/Section';
import Badge from './ui/Badge';
import { Product } from '../types';

interface ConceptInfoCardProps {
  product: Product;
}

const ConceptInfoCard: React.FC<ConceptInfoCardProps> = ({ product }) => {
  return (
    <Section className="mt-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-[15px]">概念设计说明</h2>
        <span className="text-xs text-gray-400">了解项目进度</span>
      </div>
      <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-sm leading-relaxed text-blue-900">
         <div className="font-bold mb-1 flex items-center gap-2">
           <Badge variant="danger" className="bg-blue-600 rounded">预警平台公告</Badge>
           这是一项预备性生产计划
         </div>
         {product.description}
         <div className="mt-3 flex gap-4 text-xs font-medium">
           <div>预计量产: <span className="text-blue-700">{product.estimatedDelivery}</span></div>
           <div>目前状态: <span className="text-blue-700">原理机调试中</span></div>
         </div>
      </div>
    </Section>
  );
};

export default ConceptInfoCard;
