import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cuisines: FirebaseListObservable<any[]>;
  // restaurants: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;
  exists;

  constructor(
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.cuisines = this.af.list('/cuisines');
    this.restaurants = this.af.list('/restaurants')
      .map((restaurants) => {
        restaurants.map((restaurant) => {
          restaurant.cuisineType = this.af.object(`/cuisines/${restaurant.cuisine}`);

          restaurant.featureTypes = [];
          for (const f of Object.keys(restaurant.features)) {
            restaurant.featureTypes.push(this.af.object(`/features/${f}`));
          }
        });
        return restaurants;
      });

    this.exists = this.af.object('/restaurants/0/features/0');

    this.exists.subscribe((x) => {
      console.log(x);

      if (x && x.$value) {
        console.log('EXISTS');
      } else {
        console.log('NOT EXISTS');
      }
    });
  }
}
