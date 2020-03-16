import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    },
  ]
})
export class SwitcherComponent implements OnInit, ControlValueAccessor {
  //#region public vars
  @Input()
  public label: string;

  @Input()
  public innerValue: boolean;

  @Output()
  public whenSwitchValue$: EventEmitter<boolean> = new EventEmitter();

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
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  //#endregion
  constructor() {}

  ngOnInit(): void {
  }

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


}
