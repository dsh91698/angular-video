import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login-guard.guard';
import { SearchResultsBlockComponent } from './components/search-results-block/search-results-block.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

const routes: Routes = [
  { path: '', component: SearchResultsBlockComponent, canActivate: [LoginGuard] },
  { path: ':id', component: VideoDetailsComponent, canActivate: [LoginGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
