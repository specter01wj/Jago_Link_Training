import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.less']
})
export class StarComponent implements OnInit, OnChanges {
	@Input() rating: number;
  starPercent: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      // Convert x out of 5 starts
      // to y out of 86px width
      this.starPercent = (this.rating * 86 / 5) + 'px';
  }

}
