import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Cities', url: '/cities', icon: 'airplane' },
  ];
  // public labels = ['Novedades', 'Acerca de', 'Recordatorios'];
  constructor() {}
}
