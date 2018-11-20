import { Pipe, PipeTransform } from '@angular/core';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
import { isNull } from 'util';

@Pipe({
  'name': 'activityFilter'
})

class ActivityFilterPipe implements PipeTransform {
  public transform(items: Array<INewsItem>, isShow: boolean): Array<INewsItem> {
    if (!isShow && !isNull(items)) {
      return items.filter(x => x.active);
    }

    return items;
  }
}

export {ActivityFilterPipe};
