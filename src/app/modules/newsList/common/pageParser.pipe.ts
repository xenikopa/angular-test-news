import { Pipe, PipeTransform } from '@angular/core';

import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { isNullOrUndefined, isNull } from 'util';
import { IPageParams } from './IWhenPublishPageParams';

@Pipe({
  'name': 'pageParser'
})

class PageParserPipe implements PipeTransform {
  public transform(items: Array<INewsItem>, params: IPageParams): Array<INewsItem> {
    if (isNull(items) || isNullOrUndefined(params)) {
      return items;
    }
    const firstIndex: number =
      (params.offset - 1) * params.count;
    const start: number =
      firstIndex > items.length ? 0 : firstIndex;
    const end: number =
      Math.max(start + params.count, params.count);
    return items.slice(start, end);
  }
}

export { PageParserPipe };
