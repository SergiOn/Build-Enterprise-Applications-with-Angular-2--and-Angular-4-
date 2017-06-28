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
  // restaurant: FirebaseObjectObservable<any[]>;

  constructor(
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.cuisines = this.af.list('/cuisines');
    // this.restaurant = this.af.object('/restaurant');
  }

  add() {
    // this.cuisines.push({
    //   4: 'Asian'
    // });
    this.cuisines.push('Asian');
  }

  update() {
    this.af.object('/restaurant').update({
      name: 'New Name',
      rating: 5
    });
    this.af.object('/favorites/1/10').set(null);
  }

  remove() {
    this.af.object('/restaurant').remove()
      .then((x) => console.log('SUCCESS', x))
      .catch((er) => console.log('error', er));
  }
}
