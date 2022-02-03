import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';


  constructor(private authService: AuthService,
              private router: Router) { }


  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  logOut(): void {
    // this.router.navigate(['/welcome']);
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }

}
