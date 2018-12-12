import { ViewContainerRef, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IPageParams } from './IWhenPublishPageParams';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';

abstract class INewsListService {
  /**
   * params and method for paginator
   */
  public abstract whenGetPageParams$: Observable<IPageParams>;
  public abstract renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void;

  /**
   * method for open edit modal
   * @param item - edited item
   */
  public abstract openEditNewsModal(item: INewsItem): Observable<INewsItem>;
}

export {INewsListService};
