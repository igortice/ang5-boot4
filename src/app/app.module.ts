import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainerComponent } from './layout/container/container.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ComponentComponent } from './example-1/component/component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainComponent,
    FooterComponent,
    ComponentComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
