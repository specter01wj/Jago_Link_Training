import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';

export type OptionsArgs = {
  headers?: HttpHeaders;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};

export const httpHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private http: HttpClient) { }

  get<T>(
    url: string,
    options: OptionsArgs = { headers: new HttpHeaders(httpHeader) },
  ): Observable<T> {

    return this.http
      .get<T>(url, { ...options, observe: 'response' })
      .pipe(
        map(res => res.body),
      );
  }
}
