import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedPhotoComponent } from './shared-photo/shared-photo.component';
import { registerLocaleData } from '@angular/common';
import * as en from '@angular/common/locales/en';
import { SharedPhotoListComponent } from './shared-photo-list/shared-photo-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSharedPhotoComponent } from './single-shared-photo/single-shared-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedPhotoComponent,
    SharedPhotoListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleSharedPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
