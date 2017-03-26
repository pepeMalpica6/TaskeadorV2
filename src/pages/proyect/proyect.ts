import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { NewProyectPage } from'./newProyect';
import{ PepeApi } from'../../providers/pepe-api';

@Component({
  selector: 'page-proyect',
  templateUrl: 'proyect.html',
  providers: [ PepeApi ]
})
export class ProyectPage {
  proyectsLoaded: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public pepeApi: PepeApi
              ) {
                this.getProyects();
              }

  private getProyects() {
          this.pepeApi.get('proyect')
                .then((data)=>{
                  this.proyectsLoaded = data.proyects;
                }).catch((err)=>{
                  this.toast(err);
                });
  }

  private deleteProyect(id,name){
    let alert = this.alertCtrl.create({
      title: 'Delete this proyect?',
      message: 'Are you sure than whant to delete '+name+' proyect?',
      cssClass: 'alertTheme',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok!',
          handler: () => {
            let dataToSend = this.castToJson({ id: id,});
            this.pepeApi.delete('proyect',dataToSend)
                .then((data)=>{
                  this.toast('Proyect deleted succesfuly!');
                  this.navCtrl.pop();
                }).catch((err)=>{
                  this.showAlert('Error (x)',err);
                  this.toast(err);
                });
          }
        }
      ]
    });
    alert.present();
  }

  private newProyect(){
    this.navCtrl.push(NewProyectPage);
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

  private presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Delete this proyect?',
      message: 'Are you sure than whant to delete this proyect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok!',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }


  private toast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

    //convert a json object to the url encoded format of key=value&anotherkye=anothervalue
  private castToJson(jsonString){
      return Object.keys(jsonString).map(function(key){
        return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
      }).join('&');
  }
}
