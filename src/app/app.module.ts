import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { ViewbikeComponent } from './viewbike/viewbike.component';


const appRoutes:Routes=[
  {
    path:"",component:AddbikeComponent
  },
  {
    path:"view",component:ViewbikeComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbikeComponent,
    ViewbikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
