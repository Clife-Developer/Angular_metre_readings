import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form',component:ApartmentFormComponent},
  {path:'**',redirectTo:'form',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
