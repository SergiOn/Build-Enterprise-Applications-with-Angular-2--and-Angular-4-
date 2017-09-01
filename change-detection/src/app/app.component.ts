import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';

  movies = [
    {title: 'm1'},
    {title: 'm2'},
    {title: 'm3'},
  ];

  ngDoCheck(): void {
    console.log('AppComponent-DoCheck');
  }
}
