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
  courses: string[] = [];
  imageUrl = "http://lorempixel.com/400/200/";
  text = "In a stunning announcement, Shepard Smith said on his Friday show that after more than two decades at Fox News, he was stepping down as chief news anchor, and leaving the network.";

  colspan_2 = 2;
  colspan_6 = 6;

  isActive: boolean = false;

  course = {
    title: "Angular Course",
    rating: 4.97454,
    students: 130942,
    price: 132.95,
    releaseDate: new Date(2019, 10, 10)
  }

  // courses = ["course1", "course2", "course3"];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  getTitle() {
    return this.name;
  }

  toggleWarning() {
    this.isActive = !this.isActive;
  }

  onDivClicked($event: any) {
    console.log("On Div!!!" + $event);
  }

  onSuccess($event: any) {
    $event.stopPropagation();
    console.log("On Success!" + $event);
  }

  onKeyUp($event: any) {
    if($event.keyCode === 13) {
      console.log("Enter was pressed!");
    }
  }

  /* onKeyUp() {
    console.log("Enter was pressed!!!");
  } */

  onKeyUp2($event: any) {
    console.log("Pressed: " + $event.code);
  }

  /* onKeyUp2(email: any) {
    console.log("Pressed: " + email);
  } */

  onKeyUp3() {
    console.log(this.email);
  }




}
