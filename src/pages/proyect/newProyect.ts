import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import{ PepeApi } from'../../providers/pepe-api';
import{ DashboardPage } from'../dashboard/dashboard';

@Component({
  selector: 'page-proyect',
  templateUrl: 'newProyect.html',
  providers:[PepeApi]
})
export class NewProyectPage {
    startDate: String = new Date().toISOString();
    finishDate: String = new Date().toISOString();
    proyectName: any;
    description: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public pepeApi: PepeApi) {                
  }


  private newProyect(){
        let dataToSend: any;
        dataToSend = this.castToJson({ name: this.proyectName, description: this.description,
                dateStart: this.startDate,dateFinish: this.finishDate });

        this.pepeApi.post('proyect',dataToSend)
        .then((res) => {
          this.toast('Proyect added succesfuly !');
          this.navCtrl.popAll();// (DashboardPage);
        }, (err) => {
            this.toast(err);
        });
  }

  private getProyects(){
    this.pepeApi.load()
        .then((data) => {
          this.toast(data);
        }).catch((err)=>{
            this.toast("Hey, there is a error!! (x)");
        });
  }

  private cancel(){
      this.navCtrl.pop();
  }
  private toast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  private presentAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }


  //convert a json object to the url encoded format of key=value&anotherkye=anothervalue
  private castToJson(jsonString){
      return Object.keys(jsonString).map(function(key){
        return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
      }).join('&');
  }


}
