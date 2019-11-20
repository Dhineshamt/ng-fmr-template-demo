import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  constructor() {
    console.log('Directive created');
  }

  @HostBinding('className')
  get cssProperty() {
    return 'font-weight-bold';
  }

  @HostBinding('style.color')
  fieldValue = 'green';

  @HostListener('dblclick', ['$event'])
  doubleClickHandler(args) {
    console.log('Directive HostListener handled the double click event', args);
  }
}
