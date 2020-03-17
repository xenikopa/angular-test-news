import { TestBed, ComponentFixture } from '@angular/core/testing';

import { NewsService } from './news.service';
import { TestComponent } from 'src/app/shared/test-component/test.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewContainerRef, Injector } from '@angular/core';
import { of } from 'rxjs';
import { NewsModule } from './news.module';
import { INewsBackendService } from 'src/app/core/backend/news/common/INewsBackendService';
import { NewsBackendService } from 'src/app/core/backend/news/news-backend.service';

describe('NewsService', () => {
  let service: NewsService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        MatDialogModule,
        NewsModule
      ],
      providers: [
        NewsService,
        {provide: INewsBackendService, useClass: NewsBackendService },
      ]
    });

    service = TestBed.get(NewsService);
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('render is a function', () => {
    expect(typeof service.renderPaginaton).toEqual('function');
  });

  it('render success component', () => {
    const viewContainer: ViewContainerRef =
      fixture.componentInstance.viewContainerRef;
    const injector: Injector =
      fixture.componentInstance.injector;

    expect(viewContainer).toBeDefined();
    expect(viewContainer.length).toEqual(0);

    service.renderPaginaton(viewContainer, injector, of(0));

    expect(viewContainer.length).toEqual(1);
  });
});
