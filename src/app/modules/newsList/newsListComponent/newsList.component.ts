import { Component, ViewChild, ViewContainerRef, AfterViewInit, Injector, OnDestroy } from '@angular/core';
import { INewsBackendService } from 'src/app/core/newsBackend/common/INewsBackendService';
import { Observable, BehaviorSubject, Subject, combineLatest, zip, merge } from 'rxjs';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { INewsListService } from '../common/INewsListService';
import { takeUntil, map, withLatestFrom, tap, first } from 'rxjs/operators';
import { IPageParams } from '../common/IWhenPublishPageParams';
@Component({
  selector: 'app-news-list',
  templateUrl: './newsList.template.html',
  styleUrls: [
    './newsList.style.sass'
  ]
})

class NewsListComponent implements AfterViewInit, OnDestroy {
  @ViewChild('paginationContainer', { read: ViewContainerRef })
  public paginationContainer: ViewContainerRef;

  public sortList: Array<{
    title: string, field: string, order: string
  }> =
    [
      { title: 'По дате публикации', field: 'datePublication'},
      { title: 'По активности', field: null}
    ].map(x => ([
        { ...x, order: 'asc' },
        { ...x, order: 'desc'}
    ]))
    .reduce((prev, curr) => [...prev, ...curr]);

  public isShowAll$: Subject<boolean> =
    new BehaviorSubject(false);

  public selectedSort$: Subject<{
    title: string, field: string, order: string
  }> = new BehaviorSubject(this.sortList[0]);

  public pageParams$: Observable<IPageParams>;

  private newsList$: Observable<Array<INewsItem>> =
    this.newsBackendService.getAllNews();

  private whenDestoryComponet$: Subject<null> =
    new Subject();

  public filtredNews$: Observable<Array<INewsItem>> =
    combineLatest(this.isShowAll$, this.newsList$)
    .pipe(
      takeUntil(this.whenDestoryComponet$),
      map(([isShowAll, list]) => isShowAll ? list : list.filter(x => x.active))
    );
  constructor(
    private newsBackendService: INewsBackendService,
    private newsListService: INewsListService,
    private injector: Injector,
  ) {
    this.pageParams$ =
      this.newsListService.whenGetPageParams$
        .pipe(takeUntil(this.whenDestoryComponet$));
  }

  public ngAfterViewInit(): void {
    const countElements: Observable<number> =
      this.getCountShowNews();

    this.newsListService.renderPaginaton(
      this.paginationContainer,
      this.injector,
      countElements
    );
  }

  public ngOnDestroy(): void {
    this.whenDestoryComponet$.next(null);
    this.whenDestoryComponet$.complete();
  }
  public onChangeActivity(isActive: boolean): void {
    this.isShowAll$.next(isActive);
  }

  public onChangeSort(sortValue: {
    title: string, field: string, order: string
  }): void {
    this.selectedSort$.next(sortValue);
  }

  private getCountShowNews = (): Observable<number> =>
    this.filtredNews$.pipe(
      takeUntil(this.whenDestoryComponet$),
      map(x => x.length)
    )

}

export { NewsListComponent };
