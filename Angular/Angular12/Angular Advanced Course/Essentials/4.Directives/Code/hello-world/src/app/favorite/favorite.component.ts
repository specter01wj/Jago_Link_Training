import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less'],
  encapsulation: ViewEncapsulation.Emulated
  /*styles: [
  	`
  		.glyphicon {
			font-size: 60px;
		}
  	`
  ]*/
  // inputs: ['isFav']
})
export class FavoriteComponent implements OnInit {
	@Input('is-fav') isFav: boolean;
	@Output('on-change') change = new EventEmitter();

	

	toggleFav() {
		this.isFav = !this.isFav;
		// this.change.emit(this.isFav);
		this.change.emit({newVal: this.isFav});
	}

  constructor() { }

  ngOnInit() {
  }

}

export interface FavChangedEventArgs {
	newVal: boolean
}
