import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class VueService {

  serverUrl = environment.API;
  insta_api = environment.Insta_Api;
  errorData: {};

  constructor(private http: HttpClient) { }

  saveProfile(data) {
    return this.http.post<any>(this.serverUrl + 'insta',data).pipe(
      catchError(this.handleError)
    );
  }
  getProfiles() {
    return this.http.get<any>(this.serverUrl + 'insta').pipe(
      catchError(this.handleError)
    );
  }

  instaApi(input) {
    return this.http.get<any>(this.insta_api + input + '/?__a=1').pipe(
      catchError(this.handleError)
    );
  }

  // aman_tyagi_gudamb/?__a=1

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    
    return throwError('Something bad happened. Please try again later.');
  }
}
