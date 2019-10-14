import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello- James world';

  	post = {
		title: "Accenture",
		isFav: false
	}

	tweet = {
		content: "Twitter",
		likesCount: 10,
		isLiked: false
	}

	// onFavChanged(isFav) {
	onFavChanged(eventArgs: FavChangedEventArgs) {
		// console.log("Fav Changed! " + isFav);
		console.log("Fav Changed! " + eventArgs.newVal);
	}
}
