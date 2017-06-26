import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cuisines = ['c1', 'c2', 'c3'];
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase) {
    af.list('/cuisines').subscribe((x) => {
      this.cuisines = x;
      console.log(this.cuisines);
    });

    // this.items = af.list('/cuisines');
  }
}
