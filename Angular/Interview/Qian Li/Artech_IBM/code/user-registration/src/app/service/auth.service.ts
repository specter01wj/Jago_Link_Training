import { Injectable } from '@angular/core';

import { User } from '../interface/user';
import { MessageService } from './message.service';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	currentUser: User | undefined | null;
  redirectUrl: string = '';
  errorMessage: string = '';

  constructor(private messageService: MessageService,
              private userService: UserService) { }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }


  login(userName: string, email: string, password: string, bio: string): void {
    if (!userName || !email || !password || !bio) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    this.currentUser = {
      userName: userName,
      success: true
    };

    this.userService.getUser().subscribe({
  		next: data => {
        this.currentUser = {
          userName: userName,
          success: data.success
        };
        this.messageService.addMessage(`User: ${this.currentUser?.userName} logged in`);
      },
  		error: err => this.errorMessage = err
  	});
  }

  logout(): void {
    this.currentUser = null;
  }


}
