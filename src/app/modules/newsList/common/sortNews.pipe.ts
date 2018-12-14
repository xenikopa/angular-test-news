import { Pipe, PipeTransform } from '@angular/core';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { isNullOrUndefined } from 'util';

@Pipe({
  'name': 'sortNews'
})

class SortNewsPipe implements PipeTransform {
  public transform(
    items: Array<INewsItem>,
    field: string,
    order: 'asc' | 'desc'
  ): Array<INewsItem> {
    if (!items || !field || !order) {
      return items;
    }
    return items.sort((a, b) => {
      const first = a[field];
      const second = b[field];
      if (!isNullOrUndefined(first) && !isNullOrUndefined(second)) {
        return (order === 'asc')
          ? this.getOrderResult(first, second)
          : this.getOrderResult(second, first);
      }
    });
  }

  private getOrderResult(a: any, b: any): number {
    if (a === b) {
      return 0;
    }

    return a > b ? -1 : 1;
  }
}

export {SortNewsPipe};
