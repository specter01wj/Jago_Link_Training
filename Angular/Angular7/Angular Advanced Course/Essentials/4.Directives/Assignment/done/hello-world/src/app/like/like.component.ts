import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.less']
})
export class LikeComponent implements OnInit {
	// isLiked = false;
	@Input('is-liked') isLiked: boolean;
	@Input('like-cnt') LikesCount: number;

	toggleLiked() {
		this.isLiked = !this.isLiked;
		this.LikesCount += (this.isLiked) ? 1 : -1;
	}

  constructor() { }

  ngOnInit() {
  }

  	

}
