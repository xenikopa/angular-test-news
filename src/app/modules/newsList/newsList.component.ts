import { Component } from '@angular/core';
import { INewsBackendService } from 'src/app/core/newsBackend/common/INewsBackendService';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-news-list',
  templateUrl: './newsList.template.html',
  styleUrls: [
    './newsList.style.sass'
  ]
})

class NewsListComponent {
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

  public newsList$: Observable<Array<INewsItem>> =
    this.backend.getAllNews();


  constructor(
    private backend: INewsBackendService,
  ) { }

  public onChangeActivity(isActive: boolean): void {
    this.isShowAll$.next(isActive);
  }

  public onChangeSort(sortValue: {
    title: string, field: string, order: string
  }): void {
    this.selectedSort$.next(sortValue);
  }

}

export { NewsListComponent };
