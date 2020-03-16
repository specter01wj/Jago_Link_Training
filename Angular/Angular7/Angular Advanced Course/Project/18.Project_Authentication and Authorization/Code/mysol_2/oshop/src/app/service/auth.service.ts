import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth'; 

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login() { 
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
  	this.afAuth.auth.signOut();
  }

}
