import { Component } from '@angular/core';

import {AlertController, NavController, PopoverController} from 'ionic-angular';
import{PopoverPage} from './Popover';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers:[PopoverPage]
})
export class DashboardPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public popoverCtrl: PopoverController) {

  }

  goProyecto(){
    
  }

  public presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  private newTarea(){
    this.showAlert("Nueva tarea", "Esta es la ventana pa crear una nueva tarea");
  }

  private newProyecto(){
    this.showAlert("Nuevo proyecto", "Esta es la ventana pa crear un nuevo proyecto");
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

}
