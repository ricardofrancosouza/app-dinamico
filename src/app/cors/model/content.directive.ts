import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentInject]',
})
export class ContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
