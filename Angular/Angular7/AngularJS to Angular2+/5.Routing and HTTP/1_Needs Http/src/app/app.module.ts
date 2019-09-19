import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
// import './rxjs-extensions';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, VehicleComponent, VehicleListComponent],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})

export class AppModule {}
