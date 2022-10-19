import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { LoginGuard } from './auth/guards/login-guard.guard';
import { Page404Component } from './core/components/page404/page404.component';
import { SearchResultsBlockComponent } from './search-results-block/search-results-block.component';

const routes: Routes = [
  //routes
  // { path: '', component: AppComponent },
  { path: '', component: SearchResultsBlockComponent, canActivate: [LoginGuard] },
  {path: 'login', component: LoginComponent},
  { path: '**', component: Page404Component, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
