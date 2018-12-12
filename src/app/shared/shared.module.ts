import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgModule, forwardRef } from '@angular/core';
import { SwitcherComponent } from './switcherComponent/switcher.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './testComponent/test.component';
import { EditNewsModalComponent } from './editNewsModal/editNewsModal.component';

@NgModule({
  declarations: [
    SwitcherComponent,
    TestComponent,
    EditNewsModalComponent
  ],
  entryComponents: [
    EditNewsModalComponent
  ],
  exports: [
    SwitcherComponent,
    EditNewsModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class SharedModule {}
