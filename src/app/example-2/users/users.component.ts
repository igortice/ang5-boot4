import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-example-2-users',
  templateUrl: './users.component.html',
  styleUrls:   [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
  usersActives = ['Igor Rocha', 'Gabriel Girão'];
  usersInactives = ['Iandara Girão', 'Celcio Brasil'];

  constructor() { }

  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.usersInactives.push(this.usersActives[id]);
    this.usersActives.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.usersActives.push(this.usersInactives[id]);
    this.usersInactives.splice(id, 1);
  }
}
