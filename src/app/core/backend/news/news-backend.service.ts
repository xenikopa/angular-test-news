import { Injectable } from '@angular/core';
import { INewsBackendService } from './common/INewsBackendService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewsItem } from './common/INewsItem';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class NewsBackendService extends INewsBackendService {
  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  public getAllNews(): Observable<Array<INewsItem>> {
    return this.httpClient.get<{ articles: Array<INewsItem>}>('./assets/news.json')
        .pipe(
          map(x => x.articles),
          catchError(error => {
            console.warn(error);
            return [];
          })
        );
  }
}
