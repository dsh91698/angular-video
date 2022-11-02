import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login-guard.guard';
import { Page404Component } from './core/components/page404/page404.component';

const routes: Routes = [
  // lazy loading
  { path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'admin', 
    canActivate: [LoginGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  { path: '', 
    canActivate: [LoginGuard],
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },

  //routes
  { path: '404', component: Page404Component }, // core
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
