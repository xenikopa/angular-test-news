import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.template.html',
  styleUrls: [
    './switcher.style.sass'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    },
  ]
})

class SwitcherComponent implements ControlValueAccessor {
  @Input()
  public label: string;

  @Input()
  public value: boolean;

  @Output()
  public whenSwitchValue$: EventEmitter<boolean> =
    new EventEmitter();

  private onTouchedCallback: () => void =
    () => {}
  private onChangeCallback: (_: any) => void =
    () => {}
  constructor() {}

  public onChangeValue(checked: boolean): void {
    this.whenSwitchValue$.emit(checked);
    this.onTouchedCallback();
  }

  public writeValue(value: boolean): void {
    if (value !== this.value) {
      this.value = value;
    }
  }
  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}

export {SwitcherComponent};
