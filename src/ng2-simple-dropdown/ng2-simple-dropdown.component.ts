import {
  Component,
  OnInit,
  ElementRef,
  forwardRef,
  HostBinding,
  Input, Output,
  HostListener
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export class Item {
  name: string;
  data: Object;

  constructor(name: string, data?: Object) {
    this.name = name;
    this.data = data ? data : {};
  }
}

export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleDropdownComponent),
  multi: true
};

@Component({
  selector: 'ng2-simple-dropdown',
  templateUrl: 'ng2-simple-dropdown.component.html',
  providers: [DROPDOWN_VALUE_ACCESSOR]
})

export class SimpleDropdownComponent implements ControlValueAccessor, OnInit {
  @Input() items: Item[];
  @Input() defaultValue: string;
  @Input() isEditable: boolean = false;

  selectedValue: Item;
  toggle = false;
  isEmpty: string;

  @HostListener('document:click', ['$event'])
  onClick(e: Event) {
    this.toggle = this._elRef.nativeElement !== e.target && !this._elRef.nativeElement.contains((<any>e.target)) ? false : !this.toggle;
  }

  constructor(private _elRef: ElementRef) {}

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  get value(): Item {
    return this.selectedValue;
  }

  set value(selectedValue: Item) {
    if (!selectedValue) { return; }
    this.selectedValue = selectedValue;
    this.onChangeCallback(selectedValue);
  }

  writeValue(selectedValue: Item) {
    if (!selectedValue) { return; }
    this.selectedValue = selectedValue;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  ngOnInit(): void {
    this.value = null;
    this.isEmpty = this.items.length === 0 ? ' - No Selection' : '';
  }
}
