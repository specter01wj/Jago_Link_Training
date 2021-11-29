import { Injectable, Optional } from '@angular/core';

import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';

import { Followers } from "../models/followers";

import { Observable, throwError } from 'rxjs';
import { map, take, catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Optional() private url: string, private http: HttpClient) { }

  getAll(): Observable<Followers[]> {
    return this.http.get<Followers[]>(this.url)
    	.pipe(
	    	map(response => response),
	      catchError(this.handleError)
    	);
  }

  /*create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      	.pipe(
	    	map(response => response),
	      	catchError(this.handleError)
    	);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      	.pipe(
	    	map(response => response),
	      	catchError(this.handleError)
    	);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      // .map(response => response.json())
      // .toPromise()
      // .catch(this.handleError);
      	.pipe(
	    	map(response => response),
	      	catchError(this.handleError)
    	);
  }*/

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }

}
