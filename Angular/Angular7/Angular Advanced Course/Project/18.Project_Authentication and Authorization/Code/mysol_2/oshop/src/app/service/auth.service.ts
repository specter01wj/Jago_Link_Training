import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase'; 

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
  	private afAuth: AngularFireAuth,
  	private route: ActivatedRoute) { 
  	this.user$ = afAuth.authState;
  }

  login() { 
  	let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  	localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
  	this.afAuth.auth.signOut();
  }

}
