import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDZN92wW7u2Mn9sep1S_qI_WAwmkpsd93o',
  authDomain: 'pepper-90f68.firebaseapp.com',
  databaseURL: 'https://pepper-90f68.firebaseio.com',
  projectId: 'pepper-90f68',
  storageBucket: 'pepper-90f68.appspot.com',
  messagingSenderId: '686885962278'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
