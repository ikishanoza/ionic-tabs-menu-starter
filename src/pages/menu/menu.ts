import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterFace {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterFace[] = [
    { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tabs1Page', index: 0, icon: 'home'},
    { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tabs2Page', index: 1, icon: 'contacts'},
    { title: 'Special', pageName: 'SpecialPage', icon: 'home'}


  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
