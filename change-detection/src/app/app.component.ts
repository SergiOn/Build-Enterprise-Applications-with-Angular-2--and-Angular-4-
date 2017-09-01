import { Component, DoCheck } from '@angular/core';
import { Map } from 'immutable';

let count = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';

  // movies = [
  //   {title: 'm1'},
  //   {title: 'm2'},
  //   {title: 'm3'},
  // ];

  movies = [
    Map({title: 'm1'}),
    Map({title: 'm2'}),
    Map({title: 'm3'}),
  ];

  ngDoCheck(): void {
    console.log('AppComponent-DoCheck');
  }

  onClick() {
    // this.movies[0].title = `Changed: ${count++}`;
    // this.movies = [
    //   {title: `Changed: ${count++}`},
    //   ...this.movies.slice(1),
    // ];
    // this.movies[0] = {title: `Changed: ${count++}`};
    this.movies[0] = this.movies[0].set('title', `${count++}`);
  }
}
