import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SwitcherComponent } from './switcherComponent/switcher.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './testComponent/test.component';
import { EditNewsModalComponent } from './editNewsModal/editNewsModal.component';
import { ConfirmModalComponent } from './confirmModal/confirmModal.component';

@NgModule({
  declarations: [
    SwitcherComponent,
    TestComponent,
    EditNewsModalComponent,
    ConfirmModalComponent
  ],
  entryComponents: [
    EditNewsModalComponent,
    ConfirmModalComponent
  ],
  exports: [
    SwitcherComponent,
    EditNewsModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {}
