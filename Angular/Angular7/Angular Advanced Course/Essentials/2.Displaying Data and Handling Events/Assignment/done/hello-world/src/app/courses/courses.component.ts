
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

	name = "James Wang";

	// courses = ["course1", "course2", "course3"];
	courses = [];
  imageUrl = "http://lorempixel.com/400/200/";
  colspan_2 = 2;
  colspan_6 = 6;
  isActive = false;
  email = "jin.wang@usps.gov";

  course = {
    title: "Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2019, 10, 10)
  }

  text = 'In a stunning announcement, Shepard Smith said on his Friday show that after more than two decades at Fox News, he was stepping down as chief news anchor, and leaving the network.'
  
  isFavorite = false;

  inputTitleCase = "";

  /*onKeyUp($event) {
    if($event.keyCode === 13) {
      console.log("Enter was pressed!");
    }
  }*/

  onKeyUp($event) {
    console.log("Enter was pressed!");
  }

  /*onKeyUp2($event) {
    console.log("Pressed: " + $event.target.value);
  }*/

  onKeyUp2(email) {
    console.log("Pressed: " + email);
  }

  onKeyUp3() {
    console.log(this.email);
  }

  onSuccess($event) {
    $event.stopPropagation();
    console.log("On Success!");
  }

  onDivClicked() {
    console.log("On Div!");
  }

  toggleWarning() {
    this.isActive = !this.isActive;
  }

	getTitle() {
		return this.name;
	}

  toggleFav() {
    this.isFavorite = !this.isFavorite;
  }

  constructor(service: CoursesService) { 
  	// let service = new CoursesService();
  	this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}
