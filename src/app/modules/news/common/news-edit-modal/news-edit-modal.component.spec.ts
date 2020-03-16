import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditModalComponent } from './news-edit-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('Edit News Modal component tests', () => {
  let componentFixture: ComponentFixture<NewsEditModalComponent>;
  let component: NewsEditModalComponent;
  beforeAll(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {
          idArticle: 1,
          name: 'Test',
          datePublication: new Date(),
          author: 'Tester',
          active: true,
          previewText: 'Test preview'
        }},
      ]
    });
    componentFixture = TestBed.createComponent(NewsEditModalComponent);
    component = componentFixture.componentInstance;
  });

  it('expect correct init values', () => {
    expect(component.newsData).toEqual(component.data);
    expect(component.isCloseAuthorError).toBeFalsy();
    expect(component.isCloseNameError).toBeFalsy();
  });

  it('should have form tag', () => {
    const element: HTMLElement = componentFixture.nativeElement;
    const form = element.querySelector('form');
    expect(form).toBeDefined();
  });
});

