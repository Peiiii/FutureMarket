
import { useWishStore } from '../stores/wishStore';
import { Wish } from '../types';

export class WishManager {
  openSubmission = () => {
    useWishStore.getState().setOverlayOpen(true);
  };

  closeSubmission = () => {
    useWishStore.getState().setOverlayOpen(false);
  };

  submitWish = (content: string) => {
    if (!content.trim()) return;
    
    const store = useWishStore.getState();
    const newWish: Wish = {
      id: `w-${Date.now()}`,
      user: '先行者梦想家',
      avatar: `https://i.pravatar.cc/150?u=${Math.random()}`,
      content: content,
      time: '刚刚',
      likes: 0
    };
    
    store.addWish(newWish);
    this.closeSubmission();
  };
}
