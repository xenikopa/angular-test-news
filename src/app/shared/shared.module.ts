import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test-component/test.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  declarations: [
    SwitcherComponent,
    TestComponent,
    ConfirmModalComponent
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  exports: [
    SwitcherComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {}
