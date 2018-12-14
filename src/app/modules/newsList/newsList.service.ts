import { Subject, Observable, of } from 'rxjs';
import { Injectable, ComponentFactoryResolver, ViewContainerRef, Injector, ComponentFactory, ComponentRef } from '@angular/core';
import { INewsListService } from './common/INewsListService';
import { NewsListPaginationComponent } from './newsListPagination/newsListPagination.component';
import { IWhenPublishPageParams, IPageParams } from './common/IWhenPublishPageParams';
import { IWhenGetCountItems } from './common/IWhenGetCountInems';
import { EditNewsModalComponent } from 'src/app/shared/editNewsModal/editNewsModal.component';
import { MatDialog } from '@angular/material/dialog';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { INewsBackendService } from 'src/app/core/newsBackend/common/INewsBackendService';
import { concatMap, filter, withLatestFrom, map } from 'rxjs/operators';
import { isNull } from 'util';
@Injectable()
class NewsListService extends INewsListService {
  public whenGetPageParams$: Subject<IPageParams> =
    new Subject();
  private whenPublishPageParams: IWhenPublishPageParams =
    {
      publish: params => this.whenGetPageParams$.next(params)
    };

  private newsList$: Observable<Array<INewsItem>> =
    this.newsBackendService.getAllNews();
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private editModal: MatDialog,
    private newsBackendService: INewsBackendService,
  ) {
    super();
  }

  public getNews(): Observable<Array<INewsItem>> {
    return this.newsList$;
  }

  public onEditNews(news: INewsItem): Observable<Array<INewsItem>> {
    return of(news).pipe(
      concatMap(x =>
        this.openEditNewsModal(x)
      ),
      filter(x => !isNull(x)),
      withLatestFrom(this.newsList$),
      map(([item, news]) => {
        const indexNews: number =
          news.findIndex(x => x.idArticle === item.idArticle);
        if (indexNews !== -1) {
          news[indexNews] = item;
        }
        return news;
      })
    );
  }

  public renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void {
    if (viewContainer) {
      viewContainer.clear();
    }

    const component: ComponentFactory<NewsListPaginationComponent> =
      this.componentFactoryResolver.resolveComponentFactory(NewsListPaginationComponent);
    const options = {
      providers: [
        { provide: IWhenPublishPageParams, useValue: this.whenPublishPageParams },
        {provide: IWhenGetCountItems, useValue: countElements}
      ],
      parent: injector
    };
    const newInjector: Injector =
      Injector.create(options);

    const container: ComponentRef<NewsListPaginationComponent> =
      viewContainer.createComponent(component, 0, newInjector);

    container.changeDetectorRef.detectChanges();

  }

  private openEditNewsModal(item: INewsItem): Observable<INewsItem> {
    return this.editModal.open(EditNewsModalComponent, {data: item}).afterClosed();
  }
}

export { NewsListService };
