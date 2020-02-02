import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService {

	getVehicles = function() {
		return [
		    { id: 1, name: 'X-Wing Fighter1' },
		    { id: 2, name: 'Tie Fighter2' },
		    { id: 3, name: 'Y-Wing Fighter3' }
		];
	}

}

