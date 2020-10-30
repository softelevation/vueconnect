import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleAroundComponent } from './page/people-around/people-around.component';
import { RaisedproperComponent } from './page/raisedproper/raisedproper.component';
import { YourListComponent } from './page/your-list/your-list.component';

const routes: Routes = [
  {path: 'people-around', component: PeopleAroundComponent},
  {path: 'raisedproper/:productId', component: RaisedproperComponent},
  {path: 'your-list', component: YourListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
