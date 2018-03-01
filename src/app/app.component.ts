import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   [ './app.component.scss' ]
})
export class AppComponent {
  viewLayout   = [ 'show', 'hidden' ];
  currentIndex = 0;

  showLayout(): void {
    this.currentIndex === 0 ? this.currentIndex = 1 : this.currentIndex = 0;
  }
}
