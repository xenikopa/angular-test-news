import { Subject, Observable } from 'rxjs';
import { Injectable, ComponentFactoryResolver, ViewContainerRef, Injector, ComponentFactory, ComponentRef } from '@angular/core';
import { INewsListService } from './common/INewsListService';
import { NewsListPaginationComponent } from './newsListPagination/newsListPagination.component';
import { IWhenPublishPageParams, IPageParams } from './common/IWhenPublishPageParams';
import { IWhenGetCountItems } from './common/IWhenGetCountInems';
import { EditNewsModalComponent } from 'src/app/shared/editNewsModal/editNewsModal.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { INewsItem } from 'src/app/core/newsBackend/common/INewsItem';
@Injectable()
class NewsListService extends INewsListService {
  public whenGetPageParams$: Subject<IPageParams> =
    new Subject();
  private whenPublishPageParams: IWhenPublishPageParams =
    {
      publish: params => this.whenGetPageParams$.next(params)
    };
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private editModal: MatDialog
  ) {
    super();
  }

  public renderPaginaton(viewContainer: ViewContainerRef, injector: Injector, countElements: Observable<number>): void {
    if (viewContainer) {
      viewContainer.clear();
    }

    const component: ComponentFactory<NewsListPaginationComponent> =
      this.componentFactoryResolver.resolveComponentFactory(NewsListPaginationComponent);
    const options = {
      providers: [
        { provide: IWhenPublishPageParams, useValue: this.whenPublishPageParams },
        {provide: IWhenGetCountItems, useValue: countElements}
      ],
      parent: injector
    };
    const newInjector: Injector =
      Injector.create(options);

    const container: ComponentRef<NewsListPaginationComponent> =
      viewContainer.createComponent(component, 0, newInjector);

    container.changeDetectorRef.detectChanges();

  }

  public openEditNewsModal(item: INewsItem): Observable<INewsItem> {
    return this.editModal.open(EditNewsModalComponent, {data: item}).afterClosed();
  }

}

export { NewsListService };
