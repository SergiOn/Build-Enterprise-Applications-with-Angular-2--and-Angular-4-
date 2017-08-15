import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-page-item-datails',
  templateUrl: '/item-details.html',
  styleUrls: ['/item-details.scss']
})
export class ItemDetailsComponent {
  item: string;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
    this.item = this.navParams.get('item');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    this.viewCtrl.dismiss();
  }
}
