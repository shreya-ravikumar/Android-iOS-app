import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {
  sarea: Number;
  area: Number;
  mencount: Number;
  womencount: Number;
  concount: Number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.sarea = navParams.get('data1');
   this.area = navParams.get('data2');
   this.mencount = navParams.get('data3');
   this.womencount = navParams.get('data4');
   this.concount = navParams.get('data5');
}

housingarea() {
  let floorarea = 0.0;
  let totcount = 0.0;
  totcount = Number(this.mencount) + Number(this.womencount) + Number(this.concount);
  floorarea = totcount * 3.6;
  return floorarea.toFixed(2);
  }
housinghouses() {
    let minhouses = 0.0;
    let totcount = 0.0;
    totcount = Number(this.mencount) + Number(this.womencount) + Number(this.concount);
    minhouses = totcount/5;
    return (Math.max(1,Math.round(minhouses)));
 }
 watertank() {
  let waterperday = 0.0;
  let tankcapacity = 0.0;
  let totcount = Number(this.mencount) + Number(this.womencount) + Number(this.concount);
  waterperday = (totcount)/5 * 135 * 4;
  tankcapacity = 1.8 * Number(waterperday);
  return tankcapacity;
}
waterdemand(){
  let waterperday = 0.0;
  let totcount = Number(this.mencount) + Number(this.womencount) + Number(this.concount);
  waterperday = (totcount/5) * 135 * 4;
  return waterperday;
}
watertapsm(){
  let waterm = 0.0;
  let men = Number(this.mencount) + Number(this.concount);
  waterm = (men/15);
  return (Math.max(1,Math.ceil(waterm)));
}
watertapsw(){
  let waterw = 0.0;
  waterw = (Number(this.womencount)/15);
  return (Math.max(1,Math.ceil(waterw)));
}
toiletsm() {
  let toiletm = 0.0;
  let men = Number(this.mencount) + Number(this.concount);
  toiletm = men/10;
  return (Math.max(1,Math.ceil(toiletm)));
}
toiletsw() {
  let toiletw = 0.0;
  toiletw = (Number(this.womencount))/10;
  return (Math.max(1,Math.ceil(toiletw)));
}
toiletstot() {
  let toilet = 0.0;
  let areat = 0.0;
  let toiletm = 0.0;
  let men = Number(this.mencount) + Number(this.concount);
  toiletm = men/10;
  let toiletw = 0.0;
  toiletw = (Number(this.womencount))/10;
  toilet = Math.max(1,Math.ceil(toiletm)) + Math.max(1,Math.ceil(toiletw));
  areat = 1.2 * toilet;
  return areat.toFixed(2);
}
bathm() {
  let bathsm = 0.0;
  let men = Number(this.mencount) + Number(this.concount);
  bathsm = men/15;
  return (Math.max(1,Math.ceil(bathsm)));
}
bathw() {
  let bathsw = 0.0;
  bathsw = (Number(this.womencount))/15;
  return (Math.max(1,Math.ceil(bathsw)));
}
areabath() {
  let baths = 0.0;
  let areab = 0.0;
  let bathsm = 0.0;
  let men = Number(this.mencount) + Number(this.concount);
  bathsm = men/15;
  let bathsw = 0.0;
  bathsw = Number(this.womencount)/15;
  baths = Math.max(1,Math.ceil(bathsm)) + Math.max(1,Math.ceil(bathsw));
  areab = 1.5 * baths;
  return areab.toFixed(2);
}
kitchen() {
  let karea = 0.0;
  let totcount = Number(this.mencount) + Number(this.womencount) + Number(this.concount);
  karea = 0.6 * totcount;
  return karea.toFixed(2);
}

transport(){
  if((Number(this.sarea)) <= 40468.6)
  return "Finance to be provided to buy bus passes";
  else if(Number(this.sarea) > 40468.9)
  return "Bus/tractor facility  to be provided";
  else
  return "Data insufficient";
}

totalarea() {
  let total = 0.0;
  let floorarea = 0.0;
  let totcount = Number(this.mencount) + Number(this.womencount) + Number(this.concount);
  floorarea = totcount * 3.6;
  let Aval = 0.0;
  let Bval = 0.0;
  let Cval = 0.0;
  let Dval = 0.0;

  Aval = floorarea;

  let toilet = 0.0;
  let areat = 0.0;
  let toiletm = 0.0;
  let men = Number(this.mencount) + Number(this.concount);
  toiletm = men/10;
  let toiletw = 0.0;
  toiletw = (Number(this.womencount))/10;
  toilet = Math.max(1,Math.ceil(toiletm)) + Math.max(1,Math.ceil(toiletw));
  areat = 1.2 * toilet;
  Bval = areat;

  let baths = 0.0;
  let areab = 0.0;
  let bathsm = 0.0;
  bathsm = men/15;
  let bathsw = 0.0;
  bathsw = (Number(this.womencount))/15;
  baths = Math.max(1,Math.ceil(bathsm)) + Math.max(1,Math.ceil(bathsw));
  areab = 1.5 * baths;
  Cval = areab;

  let karea = 0.0;
  karea = 0.6 * totcount;
  Dval = karea;
  total = Number(Aval) + Number(Bval) + Number(Cval) + Number(Dval);
  total = total + (0.1*total);
  return total.toFixed(2);
}

}
