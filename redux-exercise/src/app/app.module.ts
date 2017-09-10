import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { TodoModule } from './todo';
import { IAppState, rootReducer, INITIAL_STATE } from './root.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    TodoModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 2500 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<IAppState>) {
    console.log(isDevMode());

    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
