import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent implements OnInit {
	form: FormGroup;

  	constructor(fb: FormBuilder) {
	    this.form = fb.group({
	      oldPassword: ['', 
	        Validators.required, 
	        PasswordValidators.validOldPassword
	      ],
	      newPassword: ['', Validators.required],
	      confirmPassword: ['', Validators.required]
	    }, {
	      	validator: [ 
	      		PasswordValidators.createPasswordsShouldMatch, 
	      		PasswordValidators.oldNewpasswordsShouldNotSame
	      	]
	    });
	}

  	ngOnInit() {
  	}

  	get oldPassword() { return this.form.get('oldPassword'); }
	get newPassword() { return this.form.get('newPassword'); }
	get confirmPassword() { return this.form.get('confirmPassword'); }

}
