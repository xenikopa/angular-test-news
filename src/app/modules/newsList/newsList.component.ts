import { Component } from '@angular/core';
import { INewsBackendService } from 'src/app/core/newsBackend/common/INewsBackendService';
import { Observable } from 'rxjs';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
@Component({
  selector: 'app-news-list',
  templateUrl: './newsList.template.html',
  styleUrls: [
    './newsList.style.sass'
  ]
})

class NewsListComponent {
  public newsList$: Observable<Array<INewsItem>> =
    this.backend.getAllNews();
  constructor(
    private backend: INewsBackendService,
  ) {}
}

export { NewsListComponent };
