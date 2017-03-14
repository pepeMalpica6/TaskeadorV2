import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import{ PepeApi } from'../../providers/pepe-api';

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
              public pepeApi: PepeApi) {}

  testConnection(){
    this.pepeApi.load()
    .then(data => {
      this.toast(data);
    });
  }

  ionViewDidLoad() {
    
  }

  private newProyect(){
      this.pepeApi.load()
        .then(data => {
         //   console.log(data);
        });
      console.log("{ 'proyectName': '"+this.proyectName + "', 'date: ' "+this.finishDate+"}");
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


}
