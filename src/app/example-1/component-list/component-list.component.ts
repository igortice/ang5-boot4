import { Component, Input, OnInit } from '@angular/core';
import { MyServer } from '../interface/my-server';

@Component({
  selector:    'app-example-1-component-list',
  templateUrl: './component-list.component.html',
  styleUrls:   [ './component-list.component.scss' ]
})
export class ComponentListComponent implements OnInit {
  @Input() serverChildElements: MyServer[];

  constructor() { }

  ngOnInit() {
  }

}
