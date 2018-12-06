import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './newsList.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageParserPipe } from '../common/pageParser.pipe';
import { SortNewsPipe } from '../common/sortNews.pipe';
import { NewsListService } from '../newsList.service';
import { INewsBackendService } from 'src/app/core/newsBackend/common/INewsBackendService';
import { NewsBackendService } from 'src/app/core/newsBackend/newsBackend.service';
import { INewsListService } from '../common/INewsListService';

describe('News List Component', () => {
  let componentFixture: ComponentFixture<NewsListComponent>;
  let component: NewsListComponent;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        SharedModule,
      ],
      declarations: [
        NewsListComponent,
        PageParserPipe,
        SortNewsPipe
      ],
      providers: [
        {provide: INewsBackendService, useClass: NewsBackendService },
        { provide: INewsListService, useClass: NewsListService }
      ]
    });
    componentFixture = TestBed.createComponent(NewsListComponent);
    component = componentFixture.componentInstance;
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
