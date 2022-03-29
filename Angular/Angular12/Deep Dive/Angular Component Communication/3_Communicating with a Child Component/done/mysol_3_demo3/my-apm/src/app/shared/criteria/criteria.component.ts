import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.less']
})
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {
  listFilter: string;
  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  hitMessage: string;

  @ViewChild('filterElement') filterElementRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No matches found';
    } else {
      this.hitMessage = 'Hits:' + this.hitCount;
    }
  }

  ngAfterViewInit(): void {
    if(this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

}
