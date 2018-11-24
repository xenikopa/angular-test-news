import { Injectable } from '@angular/core';
import { INewsListService } from './common/INewsListService';
@Injectable()
class NewsListService extends INewsListService {
  constructor() {
    super();
  }
}

export { NewsListService }