import { ViewContainerRef, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IPageParams } from './IWhenPublishPageParams';

abstract class INewsListService {
  public abstract whenGetPageParams$: Observable<IPageParams>;
  public abstract renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void;
}

export {INewsListService};
