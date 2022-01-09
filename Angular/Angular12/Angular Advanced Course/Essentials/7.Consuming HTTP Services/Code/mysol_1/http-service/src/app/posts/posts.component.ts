import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      }, error => {
        alert('An unexpected error occurred.');
      });
  }

  createPost(input: HTMLInputElement) {
  	let post = {title: input.value};
  	input.value = '';
  	this.postService.create(this.posts)
  		.subscribe(response => {
  			post['id'] = response['id'];
  			this.posts.splice(0, 0, post);
  		}, (error: AppError) => {
        if(error instanceof BadInput) {
          alert('400 error.');
        } else throw error;
      });

  }

  updatePost(post) {
    this.postService.update(this.posts)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.postService.delete(this.posts)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
          if(error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else throw error;
      });
  }


}
