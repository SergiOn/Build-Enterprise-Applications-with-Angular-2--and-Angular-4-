import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Map } from 'immutable';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select((s) => s.get('counter')) count;
  // @select('counter') count;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;
  // messaging.newMessages

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    // const subscription = this.ngRedux.subscribe(() => {
    //   this.counter = ngRedux.getState().counter;
    // });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
