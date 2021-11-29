import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
  title = 'firebase-demo';
  courses: any[];
  courseObj: any;
  courses$: AngularFireList<any[]>;
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
  	// this.courses$ = db.list('/courses').valueChanges();

  	this.subscription = db.list('/courses').valueChanges()
  		.subscribe(courses => {
  			this.courses = courses;
  			console.log(this.courses);
  		});

  	db.object('/courses/2').valueChanges()
  		.subscribe(course => {
  			this.courseObj = course;
  			console.log(this.courseObj);
  		});

  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  add(course: HTMLInputElement) {
  	this.courses.push({
  		author: course.value,
		  price: 2400,
		  title: "Lord of Ring"
  	});
  }

  update(course) {
  	this.db.object('/courses' + course.$key)
  		.set({
  			title: course.title + ' UPDATED',
  			author: course.author + ' UPDATED',
  			price: course.price + ' UPDATED'
  		});
  }

  delete(course) {
  	this.db.object('/courses' + course.$key)
  		.remove()
  		.then(x => console.log("Deleted!"))
  		.catch(err => console.log("Error!"));
  }

}
