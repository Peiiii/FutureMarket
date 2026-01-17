
import { create } from 'zustand';
import { Product } from '../types';

interface ProductState {
  currentProduct: Product | null;
  loading: boolean;
  error: string | null;
  
  // 基础状态更新方法
  setCurrentProduct: (product: Product | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  currentProduct: null,
  loading: true,
  error: null,

  setCurrentProduct: (currentProduct) => set({ currentProduct }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
