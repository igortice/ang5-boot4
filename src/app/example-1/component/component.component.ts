import { Component, OnInit } from '@angular/core';
import { MyServer } from '../interface/my-server';


@Component({
  selector:    'app-example-1-component',
  templateUrl: './component.component.html',
  styleUrls:   [ './component.component.scss' ]
})
export class ComponentComponent implements OnInit {
  serverParentElements: MyServer[] = [];
  myServerParent: MyServer;

  constructor() {
    this.setMyServerNull();

    this.serverParentElements.push({
      name:    'Product name 1',
      content: 'description 1',
      type:    'danger'
    });
  }

  ngOnInit() {
  }

  addServerParent(type: string) {
    this.myServerParent.type = type;
    this.serverParentElements.push(this.myServerParent);
    this.setMyServerNull();
  }

  updateServerParent() {
    this.setMyServerNull();
  }

  serverSelected(server: MyServer) {
    this.myServerParent = server;
  }

  private setMyServerNull(): void {
    this.myServerParent = {
      name:    '',
      content: '',
      type:    ''
    };
  }
}
