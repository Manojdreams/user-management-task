import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthguardService } from 'src/app/AuthguardService';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/all-pages.module').then((m) => m.AllPagesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then((m) => m.SignupModule),
  },
  { path: '**', 
  loadChildren:() => import('./pages/all-pages.module').then((m) => m.AllPagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
