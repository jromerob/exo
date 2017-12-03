import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultantsModule } from './modules/consultants/consultants.module';


import { HomeComponent } from './components/home/home.component';

import { LOCALE_ID } from '@angular/core';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ConsultantsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
