import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedPhotoComponent } from './shared-photo/shared-photo.component';
import { registerLocaleData } from '@angular/common';
import * as en from '@angular/common/locales/en';


@NgModule({
  declarations: [
    AppComponent,
    SharedPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-Us'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(en.default);
  }
}
