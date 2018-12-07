import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SwitcherComponent } from './switcherComponent/switcher.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './testComponent/test.component';
import { EditNewsModalComponent } from './editNewsModal/editNewsModal.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

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
  ],
})

export class SharedModule {}
