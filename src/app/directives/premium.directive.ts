import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  constructor(element: ElementRef) {
    console.log('Directive created');
    element.nativeElement.className = 'font-weight-bold';
    element.nativeElement.style.color = 'blue';
  }
}
