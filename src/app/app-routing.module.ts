import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from  '../app/home/home.component';
import {RetailComponent} from '../app/retail/retail.component'
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
},
{
  path: 'retail',
  component: RetailComponent,
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
