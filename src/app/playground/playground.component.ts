import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('header', { static: true }) set header(ref: ElementRef) {
    console.log('Header is initialized in the component', ref);
    ref.nativeElement.className = 'font-weight-bold text-primary';
  }

  constructor() {}

  ngOnInit() {}
}
