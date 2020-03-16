import { Observable } from 'rxjs';
import { INewsItem } from './INewsItem';

abstract class INewsBackendService {
  public abstract getAllNews(): Observable<Array<INewsItem>> ;
}

export { INewsBackendService };
