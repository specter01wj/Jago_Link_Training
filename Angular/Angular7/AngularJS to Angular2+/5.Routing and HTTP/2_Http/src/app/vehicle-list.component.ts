import { Component } from '@angular/core';
import { Vehicle, VehicleService } from './vehicle.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styles: ['li {cursor: pointer;} .error {color:red;}'],
  providers: [VehicleService]
})
export class VehicleListComponent {
  errorMessage: string;
  selectedVehicle: Vehicle;
  vehicles: Observable <Vehicle[]>;

  constructor(private vehicleService: VehicleService) {}

  getVehicles() {
    /*this.vehicleService
      .getVehicles()
      .subscribe(
        vehicles => (this.vehicles = vehicles),
        error => (this.errorMessage = <any>error)
      );*/
      this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
    this.getVehicles();
  }

  select(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }
}
