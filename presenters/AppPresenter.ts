
import { ProductManager } from '../managers/productManager';
import { WishManager } from '../managers/wishManager';

export class AppPresenter {
  public productManager: ProductManager;
  public wishManager: WishManager;

  constructor() {
    this.productManager = new ProductManager();
    this.wishManager = new WishManager();
  }

  // 初始化全局业务
  init = () => {
    this.productManager.loadProduct();
  };
}

// 单例导出以便初始化使用
export const presenterInstance = new AppPresenter();
