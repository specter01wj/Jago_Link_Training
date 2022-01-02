import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'rxjs-demo';

  ngOnInit() {
    of(2,4,6,8).subscribe(console.log);

    from([20,15,10,5])
    .pipe(
      tap(item => console.log(`emitted item .... ${item}`)),
      map(item => item * 2),
      map(item => item - 10),
      map(item => {
        if(item === 0) {
          throw new Error('zero detected');
        }
        return item;
      }),
      take(3)
    ).subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occurred ${err}`),
      () => console.log('complete')
    );
  }

}
