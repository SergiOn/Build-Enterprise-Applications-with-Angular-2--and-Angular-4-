import { Component, Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements DoCheck  {
  @Input() movies;

  ngDoCheck() {
    // console.log("MoviesComponent-DoCheck");
  }

}
