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
  // user: Observable<firebase.User>;
  displayName;
  photoURL;

  constructor(
    public http: Http,
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

      console.log(authState);

      const userRef = af.object(`/users/${authState.uid}`);
      userRef.subscribe(user => {
        const url = `https://graph.facebook.com/v2.9/${authState.providerData[0].uid}?fields=first_name,last_name,gender&access_token=${user.accessToken}`;

        this.http.get(url).subscribe(response => {
          const user = response.json();
          userRef.update({
            firstName: user.first_name,
            lastName: user.last_name
          });
          console.log(user);
        });
      });

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
