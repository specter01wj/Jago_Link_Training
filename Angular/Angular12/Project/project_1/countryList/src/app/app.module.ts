import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { WelcomeModule } from './welcome/welcome.module';

import { AppComponent } from './app.component';
// import { MyIfDirective } from './directive/my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    // MyIfDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
