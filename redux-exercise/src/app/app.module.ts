import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import observableMiddleware from 'redux-observable-middleware';
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
    HttpClientModule,
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

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {
    const middleware = isDevMode ? [promiseMiddleware(), observableMiddleware, logger] : [];
    const devToolEnhancer = isDevMode() ? this.devTools.enhancer() : undefined;

    this.ngRedux.configureStore(rootReducer, INITIAL_STATE, middleware, devToolEnhancer);
  }
}
