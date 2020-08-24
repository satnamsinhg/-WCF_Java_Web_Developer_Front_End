import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from './classes/Feature';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from './classes/Client';

@Injectable({
  providedIn: 'root',
})
export class HttpControllerService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080';

  featurePost(feature: Feature): Observable<Feature> {
    return this.http
      .post<Feature>(this.url + '/features', feature)
      .pipe(catchError(this.handleError));
  }

  clientPost(client: Client): Observable<Client> {
    return this.http
      .post<Client>(this.url + '/clients', client)
      .pipe(catchError(this.handleError));
  }

  findFeatures(clientName: string):Observable<Feature[]>{
    return this.http.get<Feature[]>(this.url + "/features/clients/" + clientName)
      .pipe(catchError(this.handleError));
  }

  findFeaturesSize(clientName: string):Observable<number> {
    return this.http.get<number>(this.url + "/features/clients/size/" + clientName)
      .pipe(catchError(this.handleError));
  }

  getClientsList():Observable<Client[]> {
    return this.http.get<Client[]>(this.url + "/clients")
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
