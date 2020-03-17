import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PageParserPipe } from './common/pageParser.pipe';
import { SortNewsPipe } from './common/sortNews.pipe';
import { INewsBackendService } from 'src/app/core/backend/news/common/INewsBackendService';
import { INewsListService } from './common/interfaces/INewsListService';
import { IAppContainerService } from 'src/app/app-component/common/IAppContainerService';
import { NewsService } from './news.service';
import { NewsBackendService } from 'src/app/core/backend/news/news-backend.service';
import { AppService } from 'src/app/app-component/app.service';
import { INotification } from 'src/app/core/notification/INotification';
import { NotificationService } from 'src/app/core/notification/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NewsComponent', () => {
  let componentFixture: ComponentFixture<NewsComponent>;
  let component: NewsComponent;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        SharedModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      declarations: [
        PageParserPipe,
        SortNewsPipe
      ],
      providers: [
        {provide: INewsBackendService, useClass: NewsBackendService },
        { provide: INewsListService, useClass: NewsService },
        { provide: IAppContainerService, useClass: AppService },
        { provide: INotification, useClass: NotificationService}
      ]
    });
    componentFixture = TestBed.createComponent(NewsComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create list', () => {
    expect(component).toBeTruthy();
  });

  it('should pagination container is correct', () => {
    expect(component.paginationContainer).toBeDefined();
  });

  it('expect sort list create correct', () => {
    const sortListResult:  Array<{
      title: string, field: string, order: string
    }> = [
      {title: 'По дате публикации', field: 'datePublication', order: 'asc'},
      {title: 'По дате публикации', field: 'datePublication', order: 'desc'},
      {title: 'По активности', field: null, order: 'asc'},
      {title: 'По активности', field: null, order: 'desc'}
    ];

    expect(component.sortList).toEqual(sortListResult);
  });

  it('expect init news is filted by active', () => {
    component.filtredNews$.subscribe(x => {
      const isAllNewsActive: boolean =
        x.filter(item => !item.active).length === 0;

      expect(isAllNewsActive).toBeTruthy();
    });
  });

});
