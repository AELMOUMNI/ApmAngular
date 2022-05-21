import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { DocksModule } from './docks/docks.module';

@NgModule({
  declarations: [	
    AppComponent,
    WelcomeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to the import array of one of the application's Angular Module
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ]), 
    ProductModule,
    DocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
