import { Component, ViewContainerRef, ViewChild, Injector } from '@angular/core';


@Component({
  template: '<div #ref></div>'
})
export class TestComponent {

  @ViewChild('ref', { read: ViewContainerRef })
  public viewContainerRef: ViewContainerRef;

  constructor(public injector: Injector) { }
}
