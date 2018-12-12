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
  //#region public vars
  @Input()
  public label: string;

  @Input()
  public innerValue: boolean;

  @Output()
  public whenSwitchValue$: EventEmitter<boolean> =
    new EventEmitter();

  public get value(): boolean {
    return this.innerValue;
  }

  public set value(v: boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  //#endregion

  //#region private vars
  private onTouchedCallback: () => void =
    () => {}
  private onChangeCallback: (_: any) => void =
    () => {}

  //#endregion
  constructor() {}

  public onChangeValue(checked: boolean): void {
    this.whenSwitchValue$.emit(checked);
    this.onTouchedCallback();
  }

  //#region default value accessor methods
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

  //#endregion
}

export {SwitcherComponent};
