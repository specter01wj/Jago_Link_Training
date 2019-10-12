import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

	name = "James";

	// courses = ["course1", "course2", "course3"];
	courses = [];

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
