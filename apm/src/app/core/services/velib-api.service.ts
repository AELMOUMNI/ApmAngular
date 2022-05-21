import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IRecord } from "../models/record";
import { IResponse } from "../models/IResponse";
// Subscribing to an observable//
//---------------------------------
@Injectable({
providedIn: 'root'
})
export class VelibApiService{
    private velibApiUrl='https://localhost:5001/api/velib';
    constructor(private http: HttpClient){}
    // Subscribing to an observable
    getProducts() : Observable<IResponse>{
        debugger;
        return this.http.get<IResponse>(this.velibApiUrl+ "/maxdocksavailable").pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    // Add error handle
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured : ${err.error.message}`;
        }
        else{
            errorMessage = `Server returned code: ${err.status}, error message is:${err.message}`;

        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}