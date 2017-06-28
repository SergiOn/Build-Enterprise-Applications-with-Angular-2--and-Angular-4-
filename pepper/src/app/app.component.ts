import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  cuisines = ['c1', 'c2', 'c3'];
  items: FirebaseListObservable<any[]>;
  private subscriptions;

  constructor(
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.subscriptions = this.af.list('/cuisines').subscribe((x) => {
      this.cuisines = x;
      console.log(this.cuisines);
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
