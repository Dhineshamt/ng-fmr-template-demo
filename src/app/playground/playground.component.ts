import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  countries = [
    'India',
    'USA',
    'France',
    'Germany',
    'Belgium',
    'Austria',
    'Russia',
    'Brazil',
    'Australia',
    'Sweden',
    'Denmark',
    'Japan'
  ];

  constructor() {}

  ngOnInit() {}
}
