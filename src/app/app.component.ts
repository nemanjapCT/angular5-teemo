import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isUserLogged = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    authenticationService.getLoggedInName.subscribe(value => this.isUserLogged = value);
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.isUserLogged = true;
    }
  }
}
