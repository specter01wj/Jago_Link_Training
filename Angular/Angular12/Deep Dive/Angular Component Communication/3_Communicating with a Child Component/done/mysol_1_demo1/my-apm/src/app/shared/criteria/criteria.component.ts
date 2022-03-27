import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.less']
})
export class CriteriaComponent implements OnInit, AfterViewInit {
  listFilter: string;

  @ViewChild('filterElement') filterElementRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

}
