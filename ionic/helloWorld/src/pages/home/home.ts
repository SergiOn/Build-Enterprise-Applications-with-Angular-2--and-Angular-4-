import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemDetailsComponent } from '../item-details/item-details';

@Component({
  selector: 'app-page-home',
  templateUrl: '/home.html',
  styleUrls: ['/home.scss']
})
export class HomePageComponent {
  items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  click() {
    console.log('click');
  }

  selectItem(item) {
    console.log(item);
    // this.navCtrl.push(ItemDetailsComponent, { item });
    this.modalCtrl.create(ItemDetailsComponent, { item }).present();
  }
}
