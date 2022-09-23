import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Importar el router de angular
import { HttpClient } from '@angular/common/http'; //Plugin de HTTP para consultar peticiones
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getCties().subscribe(res => {
      console.log('Res:', res)
      this.cities = res;
    });
  }

  getCties(){
    return this.http
    .get('assets/files/cities.json')
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
