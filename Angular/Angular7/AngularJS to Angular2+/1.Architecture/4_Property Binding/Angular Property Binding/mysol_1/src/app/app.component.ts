import { Component } from '@angular/core';

@Component
({
	selector: 'my-app',
	templateUrl: './app.component.html'
})

export class AppComponent {

	imagePath = 'assets/optimum.jpeg';
	link = 'http://angular.io';
	story = "The Empire Strikes Back";
	title = 'Angular Property Binding';

}
