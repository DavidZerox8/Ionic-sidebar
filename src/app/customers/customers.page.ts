import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Importar el router de angular

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private router: Router) { } //Implementamos el router en el constructor

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home']) //Generamos la funcion para el redireccionamiento
  }

}
