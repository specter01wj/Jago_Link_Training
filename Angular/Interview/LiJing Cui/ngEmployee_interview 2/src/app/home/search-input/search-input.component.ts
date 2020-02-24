/**
 * TODO: create an input component here, emit text when user type in text
 */

import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Output } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
// 
import {SearchFilterPipe} from '../../common/search-filter.pipe';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit,AfterViewInit{
  
@ViewChild('inputText',{static:false}) private inputText:ElementRef;
@Output() onSearch = new EventEmitter<string>();
constructor(){}
ngOnInit(){}
ngAfterViewInit() {
  console.log('inputText:',this.inputText.nativeElement);
  fromEvent(this.inputText.nativeElement,'input')
  .pipe(debounceTime(300),distinctUntilChanged(),pluck('target','value'))
  .subscribe((value: string)=>{
    console.log('value:',value);
    this.onSearch.emit(value);
  })
} 

}
