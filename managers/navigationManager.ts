
import { useNavigationStore, PageType } from '../stores/navigationStore';
import { presenterInstance } from '../presenters/AppPresenter';

export class NavigationManager {
  navigateTo = (page: PageType, productId?: string) => {
    if (page === 'detail' && productId) {
      presenterInstance.productManager.loadProduct(productId);
    }
    useNavigationStore.getState().setActivePage(page);
    window.scrollTo(0, 0);
  };

  goBack = () => {
    useNavigationStore.getState().setActivePage('market');
    window.scrollTo(0, 0);
  };
}
