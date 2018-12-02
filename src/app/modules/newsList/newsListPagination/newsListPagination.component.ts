import { Component, OnDestroy } from '@angular/core';
import { IWhenPublishPageParams, IPageParams } from '../common/IWhenPublishPageParams';
import { IWhenGetCountItems } from '../common/IWhenGetCountInems';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { map, count, mapTo, withLatestFrom, takeUntil, tap, multicast, concatMap, first } from 'rxjs/operators';

@Component({
  templateUrl: './newsListPagination.template.html',
  styleUrls: [
    './newsListPagination.style.sass'
  ]
})

class NewsListPaginationComponent implements OnDestroy {
  public readonly itemsOnPageCount: Array<number> =
    [ 4, 8, 12 ];

  public activePage$: Subject<number> =
    new BehaviorSubject(1);

  public selectedItemsCount$: Subject<number> =
    new BehaviorSubject(this.itemsOnPageCount[0]);

  public readonly pages$: Observable<Array<number>> =
    combineLatest(this.whenGetCountItems, this.selectedItemsCount$).pipe(
      map(([allCount, showdCount]) => allCount / showdCount),
      map(x => x > 1 ? Math.ceil(x) : 1),
      map(x => Array.from({ length: x }, (v, i) => ++i))
    );

  private lastPage$: Observable<number> =
    this.pages$.pipe(
      map(x => x[x.length - 1]),
      first()
    );

  private whenClickNearPage$: Subject<'prev' | 'next'> =
    new Subject();
  private whenDestroyComponent$: Subject<null> =
    new Subject();

  constructor(
    private whenPublishParams: IWhenPublishPageParams,
    private whenGetCountItems: IWhenGetCountItems,
  ) {
    combineLatest(this.selectedItemsCount$, this.activePage$)
      .pipe(
        takeUntil(this.whenDestroyComponent$),
        map(x => ({
          count: x[0],
          offset: x[1]
        }))
      )
      .subscribe(x => this.whenPublishParams.publish(x));

    this.whenClickNearPage$
      .pipe(
        takeUntil(this.whenDestroyComponent$),
        withLatestFrom(this.activePage$),
        map(([statePage, page]) => statePage === 'prev' ? page - 1 : page + 1)
      )
      .subscribe(x => this.activePage$.next(x));

  }

  public ngOnDestroy(): void {
    this.whenDestroyComponent$.next(null);
    this.whenDestroyComponent$.complete();
  }
  public onClickPage(page: string): void {
    const activePage: number =
      parseInt(page, 10);
    this.activePage$.next(activePage);
  }

  public onChangeCount(countValue: number): void {
    this.selectedItemsCount$.next(countValue);
  }
  public onClickPrevPage(): void {
    this.whenClickNearPage$.next('prev');
  }

  public onClickNextPage(): void {
    this.whenClickNearPage$.next('next');
  }

  public onClickLastPage(): void {
    this.pages$
      .pipe(
        takeUntil(this.whenDestroyComponent$),
        map(x => x[x.length]),
        multicast(this.activePage$)
      );
  }

  public isLastPage$ = (): Observable<boolean> =>
    this.lastPage$.pipe(
      withLatestFrom(this.activePage$),
      map(([lastPage, activePage]) => lastPage === activePage)
    )

  public isActivePage$ = (page: number): Observable<boolean> =>
    this.activePage$.pipe(map(x => x === page))
}

export {NewsListPaginationComponent};
