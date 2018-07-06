import { Component } from '@angular/core';

import { MaterialsPage } from '../materials/materials';
import { HomePage } from '../home/home';
import { DesignPage } from '../design/design';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = MaterialsPage;
  tab4Root = DesignPage;

  constructor() {

  }
}
