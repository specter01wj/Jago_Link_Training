import { Component, OnInit } from '@angular/core';

import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.less']
})
export class NewCourseFormComponent implements OnInit {

	form = new FormGroup({
		topics: new FormArray([])
	});

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
  	// (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  	this.topics.push(new FormControl(topic.value));
  	topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
  	let index = this.topics.controls.indexOf(topic);
  	this.topics.removeAt(index);
  }

  get topics() {
  	return this.form.get('topics') as FormArray;
  }

}
