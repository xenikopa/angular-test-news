import { Component, OnDestroy } from '@angular/core';
import { IWhenPublishPageParams } from '../common/IWhenPublishPageParams';
import { IWhenGetCountItems } from '../common/IWhenGetCountInems';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { map, withLatestFrom, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './newsListPagination.template.html',
  styleUrls: [
    './newsListPagination.style.sass'
  ]
})

class NewsListPaginationComponent implements OnDestroy {
  protected whenDestroyComponent$: Subject<null> =
    new Subject();

  public readonly itemsOnPageCount: Array<number> =
    [ 4, 8, 12 ];

  public activePage$: Subject<number> =
    new BehaviorSubject(1);

  public selectedItemsCount$: Subject<number> =
    new BehaviorSubject(this.itemsOnPageCount[0]);

  public readonly pages$: Observable<Array<number>> =
    combineLatest(this.whenGetCountItems, this.selectedItemsCount$).pipe(
      takeUntil(this.whenDestroyComponent$),
      map(([allCount, showdCount]) => allCount / showdCount),
      map(x => x > 1 ? Math.ceil(x) : 1),
      map(x => Array.from({ length: x }, (v, i) => ++i))
    );
  public lastPage$: Observable<number> =
    this.pages$.pipe(
      takeUntil(this.whenDestroyComponent$),
      map(x => x[x.length - 1])
    );

  public isLastPage$: Observable<boolean> =
    combineLatest(this.activePage$, this.lastPage$).pipe(
      takeUntil(this.whenDestroyComponent$),
      map(([activePage, lastPage]) => activePage === lastPage)
    );

  private whenClickNearPage$: Subject<'prev' | 'next'> =
    new Subject();

  private whenClickLastPage$: Subject<null> =
    new Subject();

  constructor(
    private whenPublishParams: IWhenPublishPageParams,
    private whenGetCountItems: IWhenGetCountItems,
  ) {
    combineLatest(
      this.selectedItemsCount$,
      this.activePage$,
      this.lastPage$
    ).pipe(
      takeUntil(this.whenDestroyComponent$),
      map(([count, activePage, lastPage]) => {
        if (activePage > lastPage) {
          this.activePage$.next(lastPage);
        }
        return { count, activePage};
      }),
      map(({ count, activePage }) => ({
        count,
        offset: activePage
      }))
    )
    .subscribe(x => this.whenPublishParams.publish(x));

    this.whenClickNearPage$.pipe(
        takeUntil(this.whenDestroyComponent$),
        withLatestFrom(this.activePage$),
        map(([statePage, page]) => statePage === 'prev' ? page - 1 : page + 1)
      )
      .subscribe(x => this.activePage$.next(x));

    this.whenClickLastPage$.pipe(
      takeUntil(this.whenDestroyComponent$),
      withLatestFrom(this.lastPage$),
      map(([_, page]) => page)
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
    this.whenClickLastPage$.next(null);
  }

  public isActivePage$ = (page: number): Observable<boolean> =>
    this.activePage$.pipe(map(x => x === page))
}

export {NewsListPaginationComponent};
