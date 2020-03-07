import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	/*this.route.paramMap
  		.subscribe(params => {
  			// console.log(params);
  			let id = +params.get('id');
  			console.log(id);
  		});*/
  		// console.log("Github profile, oninit!");
  		/*let id = this.route.snapshot.paramMap.get('id');
  		console.log(id);*/
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    /*.subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page });
      this.service.getAll()
          .subscribe(followers => this.followers = followers);
    });*/
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      // return this.service.getAll();
    })
    .subscribe(params => {
        // console.log(params);
        let id = +params.get('id');
        console.log(id);
      });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    })
  }

}
