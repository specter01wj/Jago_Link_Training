import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }


  getCourses() {
  	return ["course1", "course2", "course3"];
  }

}
