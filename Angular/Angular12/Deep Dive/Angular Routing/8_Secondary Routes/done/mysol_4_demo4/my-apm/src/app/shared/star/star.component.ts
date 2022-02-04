import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.less']
})
export class StarComponent implements OnInit, OnChanges {
	@Input() rating = 0;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
