import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent {
  items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  constructor(public navCtrl: NavController) {

  }

  click() {
    console.log('click');
  }
}
