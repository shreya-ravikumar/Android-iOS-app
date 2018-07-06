import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { WaterPage } from '../water/water';
import { ToiletPage } from '../toilet/toilet';
import { LightPage } from '../light/light';
import { Wall1Page } from '../wall1/wall1';
import { Wall2Page } from '../wall2/wall2';

@Component({
  selector: 'page-contact',
  templateUrl: 'materials.html'
})
export class MaterialsPage {
Option: string = "Infrastructure";
isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
   this.Option = "Infrastructure";
   this.isAndroid = platform.is('android');
  }
  goToDetails()
  {
    this.navCtrl.push(WaterPage);
  }
  goToDetails1()
  {
    this.navCtrl.push(ToiletPage);
  }
  goToDetails2()
  {
    this.navCtrl.push(LightPage);
  }
  goToDetails3()
  {
    this.navCtrl.push(Wall1Page);
  }
  goToDetails4()
  {
    this.navCtrl.push(Wall2Page);
  }

}
