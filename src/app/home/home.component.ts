import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(users => {
        this.users = users;
    });
  }

  logout() {
    this.authenticationService.logout();
  }

}
