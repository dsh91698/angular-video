import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { LoginGuard } from './auth/guards/login-guard.guard';
import { Page404Component } from './core/components/page404/page404.component';
import { SearchResultsBlockComponent } from './youtube/components/search-results-block/search-results-block.component';
import { YoutubeModule } from './youtube/youtube.module';

const routes: Routes = [
  // lazy loading
{path: '', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)},
// {path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
// {path: '404', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
{path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  //routes
  // { path: '', component: AppComponent },
  // { path: '', component: SearchResultsBlockComponent, canActivate: [LoginGuard] }, // moved into Youtube.routing
  // {path: 'login', component: LoginComponent},
  // { path: '404', component: Page404Component, canActivate: [LoginGuard] }, // moved  into core.routing
  { path: '**', redirectTo:'404', pathMatch: 'full'},
  // { path: '**', component: Page404Component, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [
    YoutubeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
