import { Component, OnInit } from '@angular/core';

interface MyServer {
  name: string;
  content: string;
  type: string;
}

@Component({
  selector:    'app-example-1-component',
  templateUrl: './component.component.html',
  styleUrls:   [ './component.component.scss' ]
})
export class ComponentComponent implements OnInit {
  serverElements: MyServer[] = [];
  myServer: MyServer;

  constructor() {
    this.setMyServerNull();

    this.serverElements.push({
      name:    'Product name 1',
      content: 'description 1',
      type:    'primary'
    });
  }

  ngOnInit() {
  }

  addServer(type: string) {
    this.myServer.type = type;
    this.serverElements.push(this.myServer);
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
