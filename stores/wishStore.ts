
import { create } from 'zustand';
import { Wish } from '../types';
import { MOCK_WISHES } from '../data/mockData';

interface WishState {
  wishes: Wish[];
  isOverlayOpen: boolean;
  
  setWishes: (wishes: Wish[]) => void;
  addWish: (wish: Wish) => void;
  setOverlayOpen: (open: boolean) => void;
}

export const useWishStore = create<WishState>((set) => ({
  wishes: MOCK_WISHES,
  isOverlayOpen: false,

  setWishes: (wishes) => set({ wishes }),
  addWish: (wish) => set((state) => ({ wishes: [wish, ...state.wishes] })),
  setOverlayOpen: (isOverlayOpen) => set({ isOverlayOpen }),
}));
