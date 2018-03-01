import { Component, OnInit } from '@angular/core';
import { MyServer } from '../interface/my-server';


@Component({
  selector:    'app-example-1-component',
  templateUrl: './component.component.html',
  styleUrls:   [ './component.component.scss' ]
})
export class ComponentComponent implements OnInit {
  serverParentElements: MyServer[] = [];
  myServer: MyServer;

  constructor() {
    this.setMyServerNull();

    this.serverParentElements.push({
      name:    'Product name 1',
      content: 'description 1',
      type:    'primary'
    });
  }

  ngOnInit() {
  }

  addServer(type: string) {
    this.myServer.type = type;
    this.serverParentElements.push(this.myServer);
    this.setMyServerNull();
  }

  private setMyServerNull(): void {
    this.myServer = {
      name:    '',
      content: '',
      type:    ''
    };
  }
}
