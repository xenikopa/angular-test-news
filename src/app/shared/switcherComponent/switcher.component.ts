import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.template.html',
  styleUrls: [
    './switcher.style.sass'
  ]
})

class SwitcherComponent {
  @Input()
  public label: string;

  @Output() 
  public whenSwitchValue$: EventEmitter<boolean> =
    new EventEmitter();

  constructor(){}

  public onChangeValue(checked: boolean): void {
    this.whenSwitchValue$.emit(checked);
  }
}

export {SwitcherComponent}