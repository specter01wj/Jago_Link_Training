import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
	name = "James";
	courses = [];

	// courses = ["course1", "course2", "course3"];

  constructor(private service: CoursesService) {}

  ngOnInit() {
  	this.courses = this.service.getCourses();
  }

  getTile() {
	return this.name;
  }

}
