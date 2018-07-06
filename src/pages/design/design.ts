import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
/**
 * Generated class for the DesignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-design',
  templateUrl: 'design.html',
})
export class DesignPage {
  Option: string = "Planning";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    this.isAndroid = platform.is('android');
    this.Option = "Planning";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesignPage');
  }
}
