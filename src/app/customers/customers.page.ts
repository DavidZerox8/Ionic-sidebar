import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Importar el router de angular
import { HttpClient } from '@angular/common/http'; //Plugin de HTTP para consultar peticiones
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers: any = [];

  constructor(private router: Router, private http: HttpClient) { } //Implementamos el router, http en el constructor

  ngOnInit() {
    this.getCustomers().subscribe(res => {
      console.log('Res:', res)
      this.customers = res;
    });
  }

  goToHome(){
    this.router.navigate(['/home']) //Generamos la funcion para el redireccionamiento
  }

  getCustomers(){
    return this.http
    .get('assets/files/customers.json')
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
