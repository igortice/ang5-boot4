import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  usersActives   = [ 'Igor Rocha', 'Gabriel Girão' ];
  usersInactives = [ 'Iandara Girão', 'Celcio Brasil' ];

  constructor() { }

  onSetToInactive(id: number) {
    this.usersInactives.push(this.usersActives[ id ]);
    this.usersActives.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.usersActives.push(this.usersInactives[ id ]);
    this.usersInactives.splice(id, 1);
  }

}
