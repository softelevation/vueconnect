import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleAroundComponent } from './page/people-around/people-around.component';
import { RaisedproperComponent } from './page/raisedproper/raisedproper.component';
import { YourListComponent } from './page/your-list/your-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleAroundComponent,
    RaisedproperComponent,
    YourListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
