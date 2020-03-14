import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
  	private userService: UserService,
  	private auth: AuthService,
  	private router: Router) {
  	auth.user$.subscribe(user => {
  		if(user) {
  			userService.save(user);
  			let returnUrl = localStorage.getItem('returnUrl');
  			router.navigateByUrl(returnUrl);
  		}
  	});
  }

}
