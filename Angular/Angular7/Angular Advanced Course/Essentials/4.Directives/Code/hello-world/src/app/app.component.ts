import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello- James world';

  courses = [1, 2];

    courses_2 = [
	  	{id: 1, name: "course 1"},
	  	{id: 2, name: "course 2"},
	  	{id: 3, name: "course 3"}
	  ];

	  courses_3 = [];

	  /*courses_3 = [
	  	{id: 1, name: "course 1"},
	  	{id: 2, name: "course 2"},
	  	{id: 3, name: "course 3"}
	  ];*/

	  canSave = true;

  	viewMode = "map";

  	post = {
		title: "Accenture",
		isFav: false
	}

	tweet = {
		content: "Twitter",
		likesCount: 10,
		isLiked: false
	}

	task = {
		title: "Mission 1",
		assignee: {
			name: "John Smith"
		}
	}

	loadCourses() {
		this.courses_3 = [
			{id: 10, name: "course 10"},
  			{id: 11, name: "course 11"},
  			{id: 12, name: "course 12"}	
		]
	}

	trackCourse(index, course) {
		return course ? course.id : undefined;
	}

	onAdd() {
		this.courses_2.push({id: 4, name: "course 4"});
	}

	onRemove(course) {
		let index = this.courses_2.indexOf(course);
		this.courses_2.splice(index, 1);
	}

	// onFavChanged(isFav) {
	onFavChanged(eventArgs: FavChangedEventArgs) {
		// console.log("Fav Changed! " + isFav);
		console.log("Fav Changed! " + eventArgs.newVal);
	}
}
