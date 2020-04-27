import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'win-loss-stats/:tourneyId',
    loadChildren: () => import('./win-loss-stats/win-loss-stats.module').then( m => m.WinLossStatsPageModule)
  },
  {
    path: 'most-klask-stats/:tourneyId',
    loadChildren: () => import('./most-klask-stats/most-klask-stats.module').then( m => m.MostKlaskStatsPageModule)
  },
  {
    path: 'join-tourney/:tourneyName',
    loadChildren: () => import('./join-tourney/join-tourney.module').then( m => m.JoinTourneyPageModule)
  },
  {
    path: 'game-scoring',
    loadChildren: () => import('./game-scoring/game-scoring.module').then( m => m.GameScoringPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
