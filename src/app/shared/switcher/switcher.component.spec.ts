import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherComponent } from './switcher.component';
import { FormsModule } from '@angular/forms';

describe('Switcher Components tests', () => {
  let componentFixture: ComponentFixture<SwitcherComponent>;
  let component: SwitcherComponent;
  beforeAll(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        SwitcherComponent
      ],
    });
    componentFixture = TestBed.createComponent(SwitcherComponent);
    component = componentFixture.componentInstance;
  });
  it('should have container with class switcher', () => {
    const element: HTMLElement = componentFixture.nativeElement;
    const div = element.getElementsByClassName('switcher');
    expect(div).toBeDefined();
  });

  it('should have label with child "slider"', () => {
    const element: HTMLElement = componentFixture.nativeElement;
    const label = element.querySelector('label');
    const span = label.lastElementChild;

    expect(label).toBeDefined();
    expect(label.className).toBe('switcher__box');

    expect(span).toBeDefined();
    expect(span.nodeName).toEqual('SPAN');
    expect(span.className).toBe('slider');
  });
});

