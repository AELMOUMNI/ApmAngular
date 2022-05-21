/*import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apm';
}*/
/*------------------------------------------------------------------------*/
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'> {{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/docksavailable'>Station Disponible</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
  //template: ' <div><h1>{{pageTitle}}</h1><pm-products></pm-products></div>'
})
export class AppComponent {
  //title = 'apm-new';
  pageTitle: string = 'Acme Product Management';
}
