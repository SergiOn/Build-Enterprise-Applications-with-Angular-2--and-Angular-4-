import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cuisines: FirebaseListObservable<any[]>;
  restaurants: FirebaseObjectObservable<any[]>;

  constructor(
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.cuisines = this.af.list('/cuisines');
    this.restaurants = this.af.object('/restaurants');
  }
}
