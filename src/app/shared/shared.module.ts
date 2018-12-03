import { NgModule } from '@angular/core';
import { SwitcherComponent } from './switcherComponent/switcher.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './testComponent/test.component';

@NgModule({
  declarations: [
    SwitcherComponent,
    TestComponent,
  ],
  exports: [
    SwitcherComponent,
  ],
  imports: [
    CommonModule
  ],
})

export class SharedModule {}
