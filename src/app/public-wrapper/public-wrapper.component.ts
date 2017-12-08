import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-wrapper',
  templateUrl: './public-wrapper.component.html',
  styleUrls: ['./public-wrapper.component.scss']
})
export class PublicWrapperComponent implements OnInit {

  options = {
    'fixed': false,
    'top': 0,
    'bottom': 0,
  };

  constructor() { }

  ngOnInit() {
  }

}
