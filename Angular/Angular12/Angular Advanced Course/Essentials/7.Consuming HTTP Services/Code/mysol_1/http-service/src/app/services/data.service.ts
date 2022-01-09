import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  create(resource) {
  	return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  delete(post) {
    return this.http.delete(this.url + '/' + post.id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
      if(error.status === 400) {
        return Observable.throw(new BadInput(error.json));
      }
      if(error.status === 404) {
        return Observable.throw(new NotFoundError());
      }
      return Observable.throw(new AppError(error));
  }


}
