import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cuisines: FirebaseListObservable<any[]>;
  restaurant: FirebaseObjectObservable<any[]>;

  constructor(
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.cuisines = this.af.list('/cuisines');
    this.restaurant = this.af.object('/restaurant/address');
  }
}
