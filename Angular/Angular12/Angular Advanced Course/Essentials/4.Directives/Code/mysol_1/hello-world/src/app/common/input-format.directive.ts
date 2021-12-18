import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format-type') format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('on Focus!');
  }

  @HostListener('blur') onBlur() {
    console.log('on Blur!');
    let value: string = this.el.nativeElement.value;

    if(this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
