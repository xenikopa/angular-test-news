import { ViewContainerRef, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IPageParams } from './IWhenPublishPageParams';
import { INewsItem } from 'src/app/core/backend/news/common/INewsItem';

abstract class INewsListService {
  /**
   * params and method for paginator
   */
  public abstract whenGetPageParams$: Observable<IPageParams>;
  public abstract getNews(): Observable<Array<INewsItem>>;

  public abstract onEditNews(news: INewsItem): Observable<Array<INewsItem>>;
  public abstract renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void;
}

export {INewsListService};
