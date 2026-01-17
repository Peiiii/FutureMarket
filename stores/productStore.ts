
import { create } from 'zustand';
import { Product, Wish } from '../types';
import { MOCK_WISHES } from '../data/mockData';

interface ProductState {
  currentProduct: Product | null;
  wishes: Wish[];
  loading: boolean;
  error: string | null;
  
  // 基础状态更新方法
  setCurrentProduct: (product: Product | null) => void;
  setWishes: (wishes: Wish[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  currentProduct: null,
  wishes: MOCK_WISHES,
  loading: true,
  error: null,

  setCurrentProduct: (currentProduct) => set({ currentProduct }),
  setWishes: (wishes) => set({ wishes }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
