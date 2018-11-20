import { NgModule } from "@angular/core";
import { SwitcherComponent } from "./switcherComponent/switcher.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SwitcherComponent,
  ],
  exports: [
    SwitcherComponent,
  ],
  imports: [
    CommonModule
  ],
})

export class SharedModule {}