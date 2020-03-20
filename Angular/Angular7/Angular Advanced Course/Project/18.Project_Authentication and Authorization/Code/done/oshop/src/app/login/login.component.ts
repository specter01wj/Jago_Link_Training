import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { AuthService } from '../service/auth.service'; 
// import * as firebase from 'firebase'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /*constructor(private afAuth: AngularFireAuth) { 
  }*/
  constructor(private auth: AuthService) { 
  }

  login() { 
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.auth.login();
  }

}
