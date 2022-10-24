import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login-guard.guard';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '404', component: Page404Component, canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
