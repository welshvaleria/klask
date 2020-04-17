import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'win-loss-stats',
    loadChildren: () => import('./win-loss-stats/win-loss-stats.module').then( m => m.WinLossStatsPageModule)
  },  {
    path: 'join-tourney',
    loadChildren: () => import('./join-tourney/join-tourney.module').then( m => m.JoinTourneyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
