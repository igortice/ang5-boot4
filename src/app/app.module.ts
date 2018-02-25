import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainerComponent } from './layout/container/container.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainComponent,
    FooterComponent
  ],
  imports:      [
    BrowserModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
