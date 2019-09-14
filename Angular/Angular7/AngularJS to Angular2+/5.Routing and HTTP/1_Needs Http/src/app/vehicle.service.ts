import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class Vehicle {
  constructor(public id: number, public name: string) {}
}

@Injectable()
export class VehicleService {
	constructor(private http: Http) {

	}

  	getVehicles() {
  		return this.http.get('api/vehicles.json')
  			.map((response: Response) => <Vehicle[]>response.json().data)
  			.catch(this.handleError);
    /*return [
      new Vehicle(1, 'X-Wing Fighter'),
      new Vehicle(2, 'B-Wing Fighter'),
      new Vehicle(3, 'Y-Wing Fighter')
    ];*/
  	}

  	private handleError(error: Response) {
  		let msg = `Status code ${error.status} on url ${error.url}`;
  		console.error(msg);
  		// return Observable.throw(msg);
      return throwError(msg);
  	}
}
