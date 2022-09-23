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
  searchedUser: any;

  constructor(private router: Router, private http: HttpClient) { } //Implementamos el router, http en el constructor

  ngOnInit() {
    this.getCustomers().subscribe(res => {
      console.log('Res:', res)
      this.customers = res;
      this.searchedUser = this.customers;
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

  searchCustomer(event){
    const text = event.target.value;
    this.searchedUser = this.customers;

    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((customer: any) => {
        return (customer.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

}
