import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleDropdownComponent } from './ng2-simple-dropdown.component';

@NgModule({
  declarations: [
    SimpleDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SimpleDropdownComponent,
    FormsModule
  ]
})
export class SimpleDropdownModule { }
