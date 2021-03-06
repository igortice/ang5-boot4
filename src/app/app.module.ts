import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainerComponent } from './layout/container/container.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ComponentComponent } from './example-1/component/component.component';
import { FormsModule } from '@angular/forms';
import { ComponentFormComponent } from './example-1/component-form/component-form.component';
import { ComponentListComponent } from './example-1/component-list/component-list.component';
import { UsersComponent } from './example-2/users/users.component';
import { ActiveUsersComponent } from './example-2/active-users/active-users/active-users.component';
import { InactiveUsersComponent } from './example-2/inactive-users/inactive-users/inactive-users.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainComponent,
    FooterComponent,
    ComponentComponent,
    ComponentFormComponent,
    ComponentListComponent,
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
