
import { ProductManager } from '../managers/productManager';

export class AppPresenter {
  public productManager: ProductManager;

  constructor() {
    this.productManager = new ProductManager();
  }

  // 初始化全局业务
  init = () => {
    this.productManager.loadProduct();
  };
}

// 单例导出以便初始化使用
export const presenterInstance = new AppPresenter();
