import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'app-page-item-datails',
  templateUrl: '/item-details.html',
  styleUrls: ['/item-details.scss']
})
export class ItemDetailsComponent {
  item: string;

  constructor(private navParams: NavParams) {
    this.item = this.navParams.get('item');
  }

}
