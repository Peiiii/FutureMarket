
import { useWishlistStore } from '../stores/wishlistStore';
import { useProductStore } from '../stores/productStore';

export class WishlistManager {
  // 添加到心愿单
  toggleItem = () => {
    const product = useProductStore.getState().currentProduct;
    if (!product) return;

    const store = useWishlistStore.getState();
    store.addItem(product.id, product.name);

    // 3秒后自动关闭Toast
    setTimeout(() => {
      useWishlistStore.getState().setToastVisible(false);
    }, 3500);
  };

  openDrawer = () => {
    useWishlistStore.getState().setWishlistDrawerOpen(true);
  };

  closeDrawer = () => {
    useWishlistStore.getState().setWishlistDrawerOpen(false);
  };

  hideToast = () => {
    useWishlistStore.getState().setToastVisible(false);
  };
}
