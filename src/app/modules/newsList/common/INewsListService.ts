import { ViewContainerRef, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IPageParams } from './IWhenPublishPageParams';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';

abstract class INewsListService {
  public abstract whenGetPageParams$: Observable<IPageParams>;
  public abstract renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void;

  public abstract openEditNewsModal(item: INewsItem): Observable<any>;
}

export {INewsListService};
