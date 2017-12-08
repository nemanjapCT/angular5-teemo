import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isActive = 0;

  constructor() { }

  ngOnInit() {
  }

  setActiveClass(nav: string) {
    if (nav === 'home') {
      this.isActive = 0;
    } else if (nav === 'link') {
      this.isActive = 1;
    } else {
      this.isActive = 2;
    }
  }

}
