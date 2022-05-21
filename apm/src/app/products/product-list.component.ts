import {Component, OnDestroy, OnInit} from "@angular/core"
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
// Life cycle hook ==> OnInit, OnDestroy
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    sub! : Subscription;

    private _listFilter: string = '';
    errorMessage: string = '';
    get listFilter() : string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
    constructor(private productService: ProductService){}

    performFilter(filterBy:string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => 
        product.productName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage() : void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void{
        // Call the subscribe methode of the returned observable
        // Provide a function to handle an emitted item 
        this.sub = this.productService.getProducts().subscribe({
            next: products =>{
                this.products = products,
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err // Provide a function to handle any returned errors
        });
    }
    //ngOnDestroy, lifecycle hook appelé lorsqu'une directive, un pipe ou un service est détruit. 
    //À utiliser pour tout nettoyage personnalisé qui doit se produire lorsque l'instance est détruite
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    onRatingClicked(message : string): void{
        this.pageTitle = 'Product List ' + message;
    }
}