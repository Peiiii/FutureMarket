
import { ProductManager } from '../managers/productManager';
import { WishManager } from '../managers/wishManager';
import { WishlistManager } from '../managers/wishlistManager';
import { NavigationManager } from '../managers/navigationManager';

export class AppPresenter {
  public productManager: ProductManager;
  public wishManager: WishManager;
  public wishlistManager: WishlistManager;
  public navigationManager: NavigationManager;

  constructor() {
    this.productManager = new ProductManager();
    this.wishManager = new WishManager();
    this.wishlistManager = new WishlistManager();
    this.navigationManager = new NavigationManager();
  }

  init = () => {
    this.productManager.loadProduct();
  };
}

export const presenterInstance = new AppPresenter();
