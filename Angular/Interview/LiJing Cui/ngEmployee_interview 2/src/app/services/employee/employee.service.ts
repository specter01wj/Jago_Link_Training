/**
 * TODO: create injectable service to fetch all employees imformation from below url:
 * http://dummy.restapiexample.com/api/v1/employees
 * You can use class HttpService from `./http-wrapper` folder to simplify your http request
 */
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
    private _productUrl = 'http://dummy.restapiexample.com/api/v1/employees';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IEmployee[]> {
        
        return this._http.get<IEmployee[]>(this._productUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data.data))),
            catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}