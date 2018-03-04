import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   [ './app.component.scss' ]
})
export class AppComponent {
  examples        = [ 'layout', 'example 1', 'example 2' ];
  exampleSelected = 2;
}
