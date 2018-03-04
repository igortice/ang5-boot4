import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector:    'app-example-2-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls:   [ './inactive-users.component.scss' ]
})
export class InactiveUsersComponent implements OnInit {
  users: string [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.usersInactives;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }

}
