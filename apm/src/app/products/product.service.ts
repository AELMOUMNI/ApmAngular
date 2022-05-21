import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IProduct } from "./product";
// Subscribing to an observable//
//---------------------------------
@Injectable({
providedIn: 'root'
})
// Define a dependency for the Http Client Service in the constructor
// Create a methode for each HTTP request
// Call the desired HTTP methode, such as get
// Use generics to specify the returned type
export class ProductService{
    private productUrl='api/products/products.json';
    constructor(private http: HttpClient){}
    // Subscribing to an observable
    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
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
/*getProducts() : IProduct[]{
    return [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];
}*/
}