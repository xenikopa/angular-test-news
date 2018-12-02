import { ViewContainerRef, Injector } from '@angular/core';
import { Observable } from 'rxjs';

abstract class INewsListService {
  public abstract whenGetPageParams$: Observable<any>;
  public abstract renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void;
}

export {INewsListService};
