import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DockAvailableListComponent } from '../docks/dock-available-list/dock-available-list.component'



@NgModule({
  declarations: [ // register the components
  DockAvailableListComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'docksavailable', component: DockAvailableListComponent},// www.myWebservice.com/products
      // {path: '', redirectTo,'welcome', pathMatch: 'full'} www.myWebservice.com 
      // {path: '**', component: PageNotFoundComponent} www.myWebservice.com/hello
      {
        path: 'docksavailable/:id',
        component: DockAvailableListComponent
      }
    ]),
    SharedModule
  ]
})
export class DocksModule { }
