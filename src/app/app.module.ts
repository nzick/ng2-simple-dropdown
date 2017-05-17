import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SimpleDropdownModule } from '../ng2-simple-dropdown/ng2-simple-dropdown.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimpleDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
