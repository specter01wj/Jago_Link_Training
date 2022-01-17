import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.currentUser && this.authService.currentUser.admin) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}
