import { NewsBackendService } from './newsBackend.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { INewsItem } from './common/INewsItem';

describe('News backend Service tests', () => {
  let service: NewsBackendService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        NewsBackendService
      ]
    });
    service = TestBed.get(NewsBackendService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('expect correct get news', () => {
    const responce: { articles: Array<INewsItem>} = {
      articles: [
        {
          idArticle: 1,
          name: 'Test',
          datePublication: new Date(),
          author: 'Tester',
          active: true,
        },
        {
          idArticle: 2,
          name: 'Test',
          datePublication: new Date(),
          author: 'Tester2',
          active: false,
        },

        {
          idArticle: 3,
          name: 'Test',
          datePublication: new Date(),
          author: 'Tester3',
          active: true,
        }
      ]
    };

    const result: Array<INewsItem> =
      responce.articles;

    service.getAllNews().subscribe(x => {
      expect(x).toBeDefined();
      expect(x).toEqual(result);
    });
    const req = httpMock.expectOne('../../../assets/news.json');
    expect(req.request.method).toBe('GET');
    req.flush(responce);
  });

  it('expect correct catch error get news', () => {
    const result: Array<INewsItem> =
      [];

    service.getAllNews().subscribe(x => {
      expect(x).toBeDefined();
      expect(x).toEqual(result);
    });
    const req = httpMock.expectOne('../../../assets/news.json');
    expect(req.request.method).toBe('GET');
    req.flush(null, {status: 500, statusText: 'Error'});
  });
});
