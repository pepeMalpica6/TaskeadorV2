import { Component } from '@angular/core';

import {ViewController, NavController } from 'ionic-angular';
import { ProyectPage } from'../proyect/proyect';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="goProyectos()">
            <ion-icon name="cube"></ion-icon> My proyects
      </button>
      <button ion-item (click)="goSettings()">
            <ion-icon name="settings"></ion-icon> Settings
      </button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {}

  goProyectos() {
    this.navCtrl.push(ProyectPage);
    this.viewCtrl.dismiss();
  }
  goSettings(){
    //this.navCtrl.push(SettingsPage);
    this.viewCtrl.dismiss();
  }
}