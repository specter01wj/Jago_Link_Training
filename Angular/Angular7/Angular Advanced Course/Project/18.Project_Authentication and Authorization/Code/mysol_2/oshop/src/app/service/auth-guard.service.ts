import { Injectable } from '@angular/core';

import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

  constructor(private auth: AuthService,
  	private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
  	return this.auth.user$.map(user => {
  		if(user) return true;

  		this.router.navigate(['/login']);
  		return false;
  	});
  }

}
