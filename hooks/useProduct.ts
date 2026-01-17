
import { useState, useEffect } from 'react';
import { FUTURISTIC_PRODUCTS } from '../data/mockData';
import { Product } from '../types';

export const useProduct = (id?: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据获取过程
    const foundProduct = id 
      ? FUTURISTIC_PRODUCTS.find(p => p.id === id) 
      : FUTURISTIC_PRODUCTS[0];
    
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  return { product, loading };
};
