import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello-world2';


  courses = [1, 2];

  courses_2 = [
    {id: 1, name: "course 1"},
    {id: 2, name: "course 2"},
    {id: 3, name: "course 3"}
  ];

  /*courses_3 = [
    {id: 101, name: "course 101"},
    {id: 102, name: "course 102"},
    {id: 103, name: "course 103"}
  ];*/
  courses_3 = [];

  canSave = true;

  viewMode = "map";




  post = {
  	title: "IBM",
  	isFav: false
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
    this.courses_2.push( {id: 4, name: "course 4"} );
  }

  onRemove(course) {
    let index = this.courses_2.indexOf(course);
    this.courses_2.splice(index, 1);
  }

  /*onFavChanged(isFav) {
  	console.log("Fav changed! " + isFav);
  }*/

  onFavChanged(eventArgs: FavChangedEventArgs) {
  	console.log("Fav changed! " + eventArgs.newVal);
  }

}
