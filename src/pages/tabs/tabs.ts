import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DashboardPage } from '../dashboard/dashboard';
import { DevelopingPage } from '../developing/developing';
import { DonePage } from '../done/done';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = DevelopingPage;
  tab3Root: any = DonePage;

  constructor() {

  }
}
