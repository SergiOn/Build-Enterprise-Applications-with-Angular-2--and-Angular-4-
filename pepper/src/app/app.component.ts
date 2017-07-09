import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent implements OnInit {

  constructor(
    public http: Http,
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase
  ) { }

  ngOnInit() { }


  register() {
    this.afAuth.auth.createUserWithEmailAndPassword(
      'programmingwithmosh@gmail.com',
      '!@#$12345'
    )
    .then(authState => console.log('REGISTER-THEN', authState))
    .catch(error => console.log('REGISTER-ERROR', error));
  }


  login() {

  }

  logout() {

  }

}
