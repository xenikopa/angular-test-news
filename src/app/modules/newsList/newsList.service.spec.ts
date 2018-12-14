import { NewsListService } from './newsList.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsListModule } from './newsList.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from 'src/app/shared/testComponent/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewContainerRef, Injector } from '@angular/core';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';

describe('News List Service Tests', () => {
  let service: NewsListService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NewsListModule,
        SharedModule,
        MatDialogModule
      ],
      providers: [
        NewsListService
      ]
    });

    service = TestBed.get(NewsListService);
    fixture = TestBed.createComponent(TestComponent);
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
