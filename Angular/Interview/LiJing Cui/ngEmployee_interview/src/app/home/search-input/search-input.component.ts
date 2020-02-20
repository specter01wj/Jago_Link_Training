/**
 * TODO: create an input component here, emit text when user type in text
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit { 

	@Input() searchText:String;

	constructor() { }
	
	ngOnInit() {
  	}

}
