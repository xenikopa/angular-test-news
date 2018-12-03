import { Component, OnInit, ViewContainerRef, ViewChild, Injector } from '@angular/core';

import { Subject, ReplaySubject } from 'rxjs';

@Component({
  template: '<div #ref></div>'
})
export class TestComponent {

  @ViewChild('ref', { read: ViewContainerRef })
  public viewContainerRef: ViewContainerRef;

  constructor(public injector: Injector) { }
}
