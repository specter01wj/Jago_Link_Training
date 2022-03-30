import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Profile } from '../interface/profile';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private profileUrl = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';
  private userUrl = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl)
      .pipe(
        tap(data => {
          console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
      );
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.profileUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: { error: { message: any; }; status: any; body: { error: any; }; }) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
