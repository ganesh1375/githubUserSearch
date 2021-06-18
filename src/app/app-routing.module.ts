import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposdetailsComponent } from './reposdetails/reposdetails.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'userdetails',component:UserdetailsComponent},
 
  {path:'userdetails/:name',component:UserdetailsComponent},
  {path:'reposdetails/:name',component:ReposdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingLink=[UserdetailsComponent,UserdetailsComponent,ReposdetailsComponent];