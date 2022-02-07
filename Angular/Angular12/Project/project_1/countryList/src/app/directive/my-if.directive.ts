import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
	@Input() set appMyIf(value) {
		if(value) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

  constructor(private templateRef: TemplateRef<any>,
  						private viewContainerRef: ViewContainerRef) { }

}
