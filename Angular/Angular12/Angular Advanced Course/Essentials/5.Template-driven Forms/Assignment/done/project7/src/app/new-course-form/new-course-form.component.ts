import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.less']
})
export class NewCourseFormComponent implements OnInit {

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(course) {
    console.log(course);
  }

}
