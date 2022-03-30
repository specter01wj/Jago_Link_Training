import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  errorMessage: string = '';
  pageTitle = 'Registration Page';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const email = loginForm.form.value.email;
      const password = loginForm.form.value.password;
      const bio = loginForm.form.value.bio;
      this.authService.login(userName, email, password, bio);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/user-profile']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

}
