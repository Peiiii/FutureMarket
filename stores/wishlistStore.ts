
import { create } from 'zustand';

interface WishlistState {
  savedProductIds: string[];
  isToastVisible: boolean;
  lastAddedProductName: string;
  isWishlistDrawerOpen: boolean;

  addItem: (productId: string, productName: string) => void;
  removeItem: (productId: string) => void;
  setToastVisible: (visible: boolean) => void;
  setWishlistDrawerOpen: (open: boolean) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  savedProductIds: [],
  isToastVisible: false,
  lastAddedProductName: '',
  isWishlistDrawerOpen: false,

  addItem: (productId, productName) => set((state) => {
    if (state.savedProductIds.includes(productId)) return state;
    return {
      savedProductIds: [...state.savedProductIds, productId],
      lastAddedProductName: productName,
      isToastVisible: true
    };
  }),
  removeItem: (productId) => set((state) => ({
    savedProductIds: state.savedProductIds.filter(id => id !== productId)
  })),
  setToastVisible: (visible) => set({ isToastVisible: visible }),
  setWishlistDrawerOpen: (open) => set({ isWishlistDrawerOpen: open }),
}));
