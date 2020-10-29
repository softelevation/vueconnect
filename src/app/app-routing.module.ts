import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectPageComponent } from './page/connect-page/connect-page.component';
import { AddHoweverComponent } from './page/add-however/add-however.component';
import { PeopleAroundComponent } from './page/people-around/people-around.component';
import { RaisedproperComponent } from './page/raisedproper/raisedproper.component';
import { YourListComponent } from './page/your-list/your-list.component';

const routes: Routes = [
  {path: 'connect-page', component: ConnectPageComponent},
  {path: 'people-around', component: PeopleAroundComponent},
  {path: 'add-however', component: AddHoweverComponent},
  {path: 'raisedproper', component: RaisedproperComponent},
  {path: 'your-list', component: YourListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
