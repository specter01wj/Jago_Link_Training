import { Component, OnInit } from '@angular/core';

import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.less']
})
export class NewCourseFormComponent implements OnInit {

	form = new FormGroup({
		topics: new FormArray([])
	});

	/*form = new FormGroup({
		name: new FormControl('', Validators.required),
		contact: new FormGroup({
			email: new FormControl(),
			phone: new FormControl()
		}),
		topics: new FormArray([])
	});*/

  constructor() { }

  
/*	form;

 	constructor(fb: FormBuilder) { 
  	this.form = fb.group({
  		name: ['', Validators.required],
		contact: fb.group({
			email: [],
			phone: []
		}),
		topics: fb.array([])
  	});
  }*/

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
  	// (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  	this.topics.push(new FormControl(topic.value));
  	topic.value = '';
  }

  removeTopic(topic: FormControl) {
  	let index = this.topics.controls.indexOf(topic);
  	this.topics.removeAt(index);
  }

  get topics() {
  	return this.form.get('topics') as FormArray;
  }

}
