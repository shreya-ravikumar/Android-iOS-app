import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToiletPage } from './toilet';

@NgModule({
  declarations: [
    ToiletPage,
  ],
  imports: [
    IonicPageModule.forChild(ToiletPage),
  ],
})
export class ToiletPageModule {}
