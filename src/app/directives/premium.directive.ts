import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  @Input() appPremium: string;
  @Output() dirCustomEvent = new EventEmitter();

  constructor() {
    console.log('Directive created');
  }

  @HostBinding('className')
  get cssProperty() {
    return this.appPremium;
  }

  @HostBinding('style.color')
  fieldValue = 'green';

  @HostListener('dblclick', ['$event'])
  doubleClickHandler(args) {
    console.log('Directive HostListener handled the double click event', args);
    this.dirCustomEvent.emit({
      message: 'Directive emits the custom event'
    });
  }
}
