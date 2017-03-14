import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
  import { PopoverPage } from '../pages/dashboard/Popover';
import { DevelopingPage } from '../pages/developing/developing';
import { DonePage } from '../pages/done/done';
import { ProyectPage } from '../pages/proyect/proyect';
import { NewProyectPage } from '../pages/proyect/newProyect';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DashboardPage,
      PopoverPage,
    DevelopingPage,
    DonePage,
    ProyectPage,
      NewProyectPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'top',
      platforms:{
        ios:{
          backButtonIcon: 'ios-arrow-back',
          iconMode: 'ios',
          pageTransition: 'ios'
        },
        android:{
          backButtonIcon: 'md-arrow-back',
          iconMode: 'md',
          pageTransition: 'ios'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DashboardPage,
      PopoverPage,
    DevelopingPage,
    DonePage,
    ProyectPage,
      NewProyectPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
