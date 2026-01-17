
import { useWishStore } from '../stores/wishStore';
import { Wish } from '../types';

export class WishManager {
  // 打开发布页
  openSubmission = () => {
    useWishStore.getState().setOverlayOpen(true);
  };

  // 关闭发布页
  closeSubmission = () => {
    useWishStore.getState().setOverlayOpen(false);
  };

  // 打开全部愿景列表页
  openList = () => {
    useWishStore.getState().setListOverlayOpen(true);
  };

  // 关闭全部愿景列表页
  closeList = () => {
    useWishStore.getState().setListOverlayOpen(false);
  };

  // 提交新愿景
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
