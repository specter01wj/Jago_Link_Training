import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
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
	private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private postService: PostService) {}
  // constructor(private http: HttpClient) {}
  /*constructor(private http: HttpClient) { 
  	http.get(this.url)
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }*/

  /*ngOnInit() {
  	this.http.get(this.url)
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }*/

  /*ngOnInit() {
  	this.postService.getPosts()
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }*/

  /*ngOnInit() {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }*/

  ngOnInit() {
    // this.postService.getPosts()
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      });
  }

  /*createPost(input: HTMLInputElement) {
  	let post = { title: input.value };
  	input.value = '';
  	this.http.post(this.url, JSON.stringify(post))
  		.subscribe(response => {
  			post['id'] = response.id;
  			this.posts.splice(0, 0, post);
  			// console.log(response);
  		});
  }*/

  /*createPost(input: HTMLInputElement) {
  	let post = { title: input.value };
  	input.value = '';

  	this.postService.createPost(post)
  		.subscribe(response => {
  			let res: any = response;
  			post['id'] = res.id;
  			this.posts.splice(0, 0, post);
  			// console.log(response);
  		}, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }*/

  /*createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.postService.createPost(post)
      .subscribe(response => {
        let res: any = response;
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
        // console.log(response);
      }, 
      (error: Response) => {
        if(error.status === 400) {
          alert('400 error.');
        } else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }*/

  /*createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.postService.createPost(post)
      .subscribe(response => {
        let res: any = response;
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
        // console.log(response);
      }, 
      (error: AppError) => {
        if(error instanceof BadInput) {
          alert('400 error.');
        } else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }*/

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    // this.postService.createPost(post)
    this.postService.create(post)
      .subscribe(response => {
        let res: any = response;
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
        // console.log(response);
      }, 
      (error: AppError) => {
        if(error instanceof BadInput) {
          alert('400 error.');
        } else throw error;
      });
  }

  /*updatePost(post) {
  	this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  		.subscribe(response => {
  			console.log(response);
  		});
  }*/

  /*updatePost(post) {
  	this.postService.updatePost(post)
  		.subscribe(response => {
  			console.log(response);
  		}, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }*/

  updatePost(post) {
    // this.postService.updatePost(post)
    this.postService.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  /*deletePost(post) {
  	this.http.delete(this.url + '/' + post.id)
  		.subscribe(response => {
  			let index = this.posts.indexOf(post);
  			this.posts.splice(index, 1);
  		});
  }*/

  /*deletePost(post) {
  	this.postService.deletePost(post)
  		.subscribe(response => {
  			let index = this.posts.indexOf(post);
  			this.posts.splice(index, 1);
  		}, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }*/

  /*deletePost(post) {
    this.postService.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        if(error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }*/

  deletePost(post) {
    // this.postService.deletePost(post)
    this.postService.delete(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        if(error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else throw error;
      });
  }

  

}
