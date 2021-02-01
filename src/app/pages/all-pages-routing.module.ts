import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPagesComponent } from './all-pages.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {path : '',
    component:AllPagesComponent,
    children: [
      { 
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then((m) => m.UserManagementModule),
      },]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPagesRoutingModule { }

