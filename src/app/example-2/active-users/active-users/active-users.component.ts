import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector:    'app-example-2-active-users',
  templateUrl: './active-users.component.html',
  styleUrls:   [ './active-users.component.scss' ]
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }

}
