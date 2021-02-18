import {Directive, ElementRef} from '@angular/core';

@Directive ({
  selector:'[app-highlight]'
})

export class HighlightDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }
}
