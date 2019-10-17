import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

	name = "James";
  email = "jwang@gmail.com";

	// courses = ["course1", "course2", "course3"];
	courses = [];
  imageUrl = "http://lorempixel.com/400/200/";
  colspan_2 = 2;
  colspan_6 = 6;
  isActive = false;

  course = {
    title: "Angular Course",
    rating: 4.97454,
    students: 130942,
    price: 132.95,
    releaseDate: new Date(2019, 10, 10)
  }

  text = "In a stunning announcement, Shepard Smith said on his Friday show that after more than two decades at Fox News, he was stepping down as chief news anchor, and leaving the network.";


  onKeyUp3() {
    console.log(this.email);
  }

  /*onKeyUp2($event) {
    console.log("Pressed: " + $event.target.value);
  }*/

  onKeyUp2(email) {
    console.log("Pressed: " + email);
  }

  /*onKeyUp($event) {
    if($event.keyCode === 13) {
      console.log("Enter was pressed!");
    }
  }*/

  onKeyUp() {
    console.log("Enter was pressed!!!");
  }

  onDivClicked($event) {
    console.log("On Div!!!");
  }

  onSuccess($event) {
    $event.stopPropagation();
    console.log("On Success!");
  }

  toggleWarning() {
    this.isActive = !this.isActive;
  }

	getTile() {
		return this.name;
	}

  constructor(service: CoursesService) { 
  	// let service = new CoursesService();
  	this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}
