import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector:    'app-example-2-users',
  templateUrl: './users.component.html',
  styleUrls:   [ './users.component.scss' ],
  providers:   [ UsersService ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
