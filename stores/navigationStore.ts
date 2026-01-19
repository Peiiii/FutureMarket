
import { create } from 'zustand';

export type PageType = 'market' | 'detail';

interface NavigationState {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activePage: 'market', // 默认为市场页
  setActivePage: (activePage) => set({ activePage }),
}));
