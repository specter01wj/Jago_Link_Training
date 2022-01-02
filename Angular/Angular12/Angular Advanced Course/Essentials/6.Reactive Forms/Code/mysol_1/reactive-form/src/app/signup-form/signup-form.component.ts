import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
  /*   'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ], [
      UsernameValidators.shouldBeUnique
    ]),
    'password': new FormControl('', Validators.required),
  }); */

    account: new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], [
        UsernameValidators.shouldBeUnique
      ]),
      'password': new FormControl('', Validators.required),
    })

  });

  // constructor() { }

  constructor(fb: FormBuilder) {
  	this.form = fb.group({
  		name: ['', Validators.required],
		contact: fb.group({
			email: [],
			phone: []
		}),
		topics: fb.array([])
  	});
  }

  ngOnInit(): void {
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

}
