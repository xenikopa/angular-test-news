import { Injectable, ComponentFactoryResolver, ViewContainerRef, Injector, ComponentFactory, ComponentRef } from '@angular/core';
import { INewsListService } from './common/interfaces/INewsListService';
import { Subject, Observable, of } from 'rxjs';
import { IPageParams, IWhenPublishPageParams } from './common/interfaces/IWhenPublishPageParams';
import { INewsItem } from 'src/app/core/backend/news/common/INewsItem';
import { MatDialog } from '@angular/material/dialog';
import { INewsBackendService } from 'src/app/core/backend/news/common/INewsBackendService';
import { concatMap, filter, withLatestFrom, map } from 'rxjs/operators';
import { isNull } from 'util';
import { IWhenGetCountItems } from './common/interfaces/IWhenGetCountInems';
import { NewsPaginationComponent } from './news-pagination/news-pagination.component';
import { NewsEditModalComponent } from './common/news-edit-modal/news-edit-modal.component';

@Injectable()
export class NewsService  extends INewsListService {
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

    const component: ComponentFactory<NewsPaginationComponent> =
      this.componentFactoryResolver.resolveComponentFactory(NewsPaginationComponent);
    const options = {
      providers: [
        { provide: IWhenPublishPageParams, useValue: this.whenPublishPageParams },
        {provide: IWhenGetCountItems, useValue: countElements}
      ],
      parent: injector
    };
    const newInjector: Injector =
      Injector.create(options);

    const container: ComponentRef<NewsPaginationComponent> =
      viewContainer.createComponent(component, 0, newInjector);

    container.changeDetectorRef.detectChanges();

  }

  private openEditNewsModal(item: INewsItem): Observable<INewsItem> {
    return this.editModal.open(NewsEditModalComponent, {data: item}).afterClosed();
  }
}
