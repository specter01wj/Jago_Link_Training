import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';
import { Profile } from '../../interface/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pageTitle = 'Profile Page';
  userName: string = '';
  email: string = '';
  bio: string = '';
  img: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
  	this.userService.getProfile().subscribe({
  		next: data => this.onProfileRetrieved(data),
  		error: err => this.errorMessage = err
  	});
  }

  onProfileRetrieved(data: Profile): void {
    this.userName = data.name;
    this.email = data.email;
    this.bio = data.bio;
  }

  onCancel(): void {
  	this.router.navigate(['/welcome']);
  }

}
