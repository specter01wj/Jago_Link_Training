import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent implements OnInit {
	@Input('zippy-title') title: string;
	isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

}
