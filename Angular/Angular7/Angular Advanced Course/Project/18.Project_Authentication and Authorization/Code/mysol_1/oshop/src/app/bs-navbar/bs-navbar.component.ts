import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user: firebase.User;
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
  	// afAuth.authState.subscribe(user => this.user = user);
  	this.user$ = afAuth.authState;






    
  }

  ngOnInit() {
  }

  logout() {
  	this.afAuth.auth.signOut();
  }

}
