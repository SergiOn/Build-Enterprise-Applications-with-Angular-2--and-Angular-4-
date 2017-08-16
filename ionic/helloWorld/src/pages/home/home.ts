import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
// import {AppVersion } from 'ionic-native';
// import { Contacts} from 'ionic-native';
// import { Camera } from 'ionic-native';
import { Geolocation } from 'ionic-native';

import { ItemDetailsComponent } from '../item-details/item-details';

@Component({
  selector: 'app-page-home',
  templateUrl: '/home.html',
  styleUrls: ['/home.scss']
})
export class HomePageComponent {
  items: Array<object> = [
    { description: 'Item 1' },
    { description: 'Item 2' },
    { description: 'Item 3' }
  ];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public platform: Platform) {
    platform.ready().then(() => {
      // AppVersion.getVersionNumber().then((v) => console.log('Version', v));
      // Contacts.find(['displayName']).then(c => console.log(c));
      // Camera.getPicture({
      //   sourceType: 0,
      //   // destinationType:
      // }).then(c => console.log('image', c));
      Geolocation.getCurrentPosition().then(p => console.log('position', p));
    });
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
