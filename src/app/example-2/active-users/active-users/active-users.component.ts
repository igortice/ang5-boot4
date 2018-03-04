import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector:    'app-example-2-active-users',
  templateUrl: './active-users.component.html',
  styleUrls:   [ './active-users.component.scss' ]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.usersActives;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

}
