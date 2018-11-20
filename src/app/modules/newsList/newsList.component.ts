import { Component } from '@angular/core';
import { INewsBackendService } from 'src/app/core/newsBackend/common/INewsBackendService';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
@Component({
  selector: 'app-news-list',
  templateUrl: './newsList.template.html',
  styleUrls: [
    './newsList.style.sass'
  ]
})

class NewsListComponent {

  public isShowAll$: Subject<boolean> =
    new BehaviorSubject(false);

  public sortValue$: Subject<{
      field: string, order: string
  }> = new BehaviorSubject({
    field: 'datePublication',
    order: 'asc'
  });

  public newsList$: Observable<Array<INewsItem>> =
    this.backend.getAllNews();


  constructor(
    private backend: INewsBackendService,
  ) {}

  public onChangeActivity(isActive: boolean): void {
    this.isShowAll$.next(isActive);
  }

  public onChangeSort(event): void {
    console.log(event);
  }
}

export { NewsListComponent };
