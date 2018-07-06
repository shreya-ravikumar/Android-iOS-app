import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CalculatorPage } from '../pages/calculator/calculator';
import { MaterialsPage } from '../pages/materials/materials';
import { HomePage } from '../pages/home/home';
import { DesignPage } from '../pages/design/design';
import { TabsPage } from '../pages/tabs/tabs';
import { WaterPage } from '../pages/water/water';
import { ToiletPage } from '../pages/toilet/toilet';
import { LightPage } from '../pages/light/light';
import { Wall1Page } from '../pages/wall1/wall1';
import { Wall2Page } from '../pages/wall2/wall2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CalculatorPage,
    MaterialsPage,
    HomePage,
    DesignPage,
    TabsPage,
    WaterPage,
    ToiletPage,
    LightPage,
    Wall1Page,
    Wall2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalculatorPage,
    MaterialsPage,
    HomePage,
    DesignPage,
    TabsPage,
    WaterPage,
    ToiletPage,
    LightPage,
    Wall1Page,
    Wall2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
