import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { NewProyectPage } from'./newProyect';

@Component({
  selector: 'page-proyect',
  templateUrl: 'proyect.html'
})
export class ProyectPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    
  }

  private deleteProyect(){
    this.showAlert("deleteProyect","Eliminar proyecto con su id");
  }

  private newProyect(){
    this.navCtrl.push(NewProyectPage);
    //this.prompAlert();
  }

  private showAlert(mTitle, messagge) {
    let alert = this.alertCtrl.create({
      title: mTitle,
      subTitle: messagge,
      buttons: ['OK'],
      cssClass: 'alertTheme'
    });
    alert.present();
  }

  private prompAlert() {
  let alert = this.alertCtrl.create({
    title: 'Create new proyect',
    cssClass: 'alertTheme',
    inputs: [
      {
        name: 'proyectName',
        placeholder: 'Proyect name'
      },
      {
        name: 'proyectDescription',
        placeholder: 'Description',
        type: 'text'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: data => {
          
        }
      }
    ]
  });
  alert.present();
}

}
