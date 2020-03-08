import { Component, OnInit } from '@angular/core';

import { GithubFollowersService } from './../services/github-followers.service';
import { DataService } from '../services/data.service';

import { Followers } from "../models/followers";

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.less']
})
export class GithubFollowersComponent implements OnInit {
  followers: Followers[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
  	this.service.getAll()
      .subscribe(
      	(data: Followers[]) => this.followers = data,
        (err: any) => console.log(err)
      );
  }

}
