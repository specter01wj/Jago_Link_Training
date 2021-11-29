import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello-world2';

  post = {
  	title: "IBM",
  	isFav: false
  }

  onFavChanged(isFav) {
  	console.log("Fav changed!" + isFav);
  }

  /*onFavChanged(eventArgs: FavChangedEventArgs) {
    console.log("Fav changed!" + eventArgs.newVal);
  }*/


}
