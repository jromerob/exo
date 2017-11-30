import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { ConsultantsModule } from './modules/consultants/consultants.module';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ConsultantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
