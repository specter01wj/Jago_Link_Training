import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { AppUser } from './../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user: firebase.User;
  user$: Observable<firebase.User>;
  appUser: AppUser;

  constructor(public auth: AuthService) { 
  	// afAuth.authState.subscribe(user => this.user = user);
  	// this.user$ = afAuth.authState;
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {
  }

  logout() {
  	// this.afAuth.auth.signOut();
    this.auth.logout();
  }

}
