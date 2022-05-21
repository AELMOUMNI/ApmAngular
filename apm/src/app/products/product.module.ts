import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ // register the components
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},// www.myWebservice.com/products
      // {path: '', redirectTo,'welcome', pathMatch: 'full'} www.myWebservice.com 
      // {path: '**', component: PageNotFoundComponent} www.myWebservice.com/hello
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
