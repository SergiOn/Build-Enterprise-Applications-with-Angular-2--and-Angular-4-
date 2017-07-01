import { Component, OnInit } from '@angular/core';
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
  // user: Observable<firebase.User>;
  displayName;
  photoURL;

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase
  ) {
    // this.user = afAuth.authState;

    afAuth.authState.subscribe(authState => {
      if (!authState) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }

      this.displayName = authState.displayName;
      this.photoURL = authState.photoURL;
    });
  }

  ngOnInit() { }


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(authState => {
        console.log('authState', authState);
        this.af.object(`/users/${authState.user.uid}`).update({
          accessToken: authState.credential.accessToken
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
