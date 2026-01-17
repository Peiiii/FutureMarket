
import { create } from 'zustand';
import { Wish } from '../types';
import { MOCK_WISHES } from '../data/mockData';

interface WishState {
  wishes: Wish[];
  isOverlayOpen: boolean;
  isListOverlayOpen: boolean; // 新增：全部愿景列表浮层状态
  
  setWishes: (wishes: Wish[]) => void;
  addWish: (wish: Wish) => void;
  setOverlayOpen: (open: boolean) => void;
  setListOverlayOpen: (open: boolean) => void; // 新增：设置列表浮层状态
}

export const useWishStore = create<WishState>((set) => ({
  wishes: MOCK_WISHES,
  isOverlayOpen: false,
  isListOverlayOpen: false,

  setWishes: (wishes) => set({ wishes }),
  addWish: (wish) => set((state) => ({ wishes: [wish, ...state.wishes] })),
  setOverlayOpen: (isOverlayOpen) => set({ isOverlayOpen }),
  setListOverlayOpen: (isListOverlayOpen) => set({ isListOverlayOpen }),
}));
