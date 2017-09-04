import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: 'INCREMENT' });
  }
}
