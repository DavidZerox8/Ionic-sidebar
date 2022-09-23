import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Importar el router de angular
import { HttpClient } from '@angular/common/http'; //Plugin de HTTP para consultar peticiones
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = [];

  constructor(
      private router: Router,
      private http: HttpClient,
      public toastController: ToastController,
      public alertController: AlertController
    ) { }

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

  async presentToast(message) { //Funcion para crear un toast alert
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });

    toast.present()
  }

  async presentAlert(message){ //funcion para crear una alerta de un solo boton
    const alert = await this.alertController.create({
      header: 'Eliminar ciudad',
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlertOptions(){ //Funcion para crear una alerta con opciones que desencadenan otras acciones
    const alert = await this.alertController.create({
      header: 'Eliminar ciudad',
      message: '¿Eliminar la ciudad?',
      buttons:
      [
        {
          text: 'No',
          handler: () => {
              this.presentToast('Ciudad no eliminada');
            }
        },
        {
          text: 'Si',
          handler: () => {
              this.presentToast('Ciudad eliminada');
            }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
