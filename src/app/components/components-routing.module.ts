import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {
    path: '',
    data: {title: ''},
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'home/:category', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }