import { NewsListPaginationComponent } from './newsListPagination.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { IWhenGetCountItems } from '../common/IWhenGetCountInems';
import { FormsModule } from '@angular/forms';
import { IWhenPublishPageParams, IPageParams } from '../common/IWhenPublishPageParams';

describe('News List Pagination Tests', () => {
  let componentFixture: ComponentFixture<NewsListPaginationComponent>;
  let component: NewsListPaginationComponent;
  const countItems$: Subject<number> =
    new Subject();
  const whenGetParams: Subject<IPageParams> =
    new Subject();
  const whenPublishPageParams: IWhenPublishPageParams = {
      publish: params => {}
    };

  beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule
        ],
        declarations: [NewsListPaginationComponent],
        providers: [
          { provide: IWhenGetCountItems, useValue: countItems$.asObservable()},
          { provide: IWhenPublishPageParams, useValue: whenPublishPageParams }
        ]
      });
      componentFixture = TestBed.createComponent(NewsListPaginationComponent);
      component = componentFixture.componentInstance;
  });

  describe('expect init values correct', () => {
    const testPagesValues = (
      lastPage: number,
      pages: Array<number>
    ): void => {
      component.lastPage$
        .subscribe(x => expect(x).toEqual(lastPage));
      component.pages$
        .subscribe(x => expect(x).toEqual(pages));
    };

    it('expect init static values correct', () => {
      component.activePage$
        .subscribe(x => expect(x).toEqual(1));
      component.selectedItemsCount$
        .subscribe(x => expect(x).toEqual(4));
    });

    it('expect correct init values with one element', () => {
      countItems$.next(1);
      testPagesValues(1, [1]);
      component.isLastPage$
        .subscribe(x => expect(x).toBeTruthy());
    });
    it('expect correct init values with no element', () => {
      countItems$.next(0);
      testPagesValues(1, [1]);
      component.isLastPage$
        .subscribe(x => expect(x).toBeTruthy());
    });
    it('expect correct init values with 21 elements', () => {
      countItems$.next(21);
      testPagesValues(1, [1, 2, 3, 4, 5]);
      component.isLastPage$
        .subscribe(x => expect(x).toBeTruthy());
    });
  });

  describe('expect get correct page params', () => {
    const testGetParams = (result: IPageParams): void => {
      whenGetParams.subscribe(x => expect(x).toEqual(result));
    };

    it('expect set correct active page fisrt time', () => {
      component.onClickPage('2');
      component.selectedItemsCount$.subscribe(x => expect(x).toBe(4));
      testGetParams({count: 4, offset: 2});
    });
    it('expect set correct count items fisrt time', () => {
      component.onChangeCount(12);

      testGetParams({count: 12, offset: 2});
    });

    it('expect correct set prev page', () => {
      component.onClickPrevPage();
      testGetParams({count: 12, offset: 1});
    });
    it('expect correct set next page', () => {
      component.onClickNextPage();
      testGetParams({count: 12, offset: 2});
    });
  });
});
