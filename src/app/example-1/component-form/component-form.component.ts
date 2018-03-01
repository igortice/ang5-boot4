import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyServer } from '../interface/my-server';

@Component({
  selector:    'app-example-1-component-form',
  templateUrl: './component-form.component.html',
  styleUrls:   [ './component-form.component.scss' ]
})
export class ComponentFormComponent implements OnInit {
  @Input() myServerChild: MyServer;
  @Output() onAddServerChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addServer(type: string) {
    this.onAddServerChild.emit(type);
  }
}
