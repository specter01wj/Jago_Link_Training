import { Component } from '@angular/core';

@Component
({
	selector: 'my-vehicles',
	templateUrl: './vehicles.component.html'
})

export class VehiclesComponent {
	vehicles = [
		{id: 1, name: 'Mike'},
		{id: 2, name: 'Tim'},
		{id: 3, name: 'James'}
	]
}
