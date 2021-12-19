import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
		{id: 1, name: 'Email'},
		{id: 2, name: 'Phone'},
		{id: 3, name: 'First Name'},
		{id: 4, name: 'Last Name'},
		{id: 5, name: 'Address'}
	];

  constructor() { }

  ngOnInit(): void {
  }

  log(x: any) {
    console.log(x);
  }

  submit(myform) {
    console.log(myform);
  }

}
