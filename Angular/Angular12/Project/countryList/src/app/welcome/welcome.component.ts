import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
	public pageTitle = 'Welcome';
	
  constructor() { }

  ngOnInit(): void {
  }

}
