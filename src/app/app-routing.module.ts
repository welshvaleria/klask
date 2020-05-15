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
    path: 'tourney-stats/:tourneyId',
    loadChildren: () => import('./tourney-stats/tourney-stats.module').then( m => m.TourneyStatsPageModule)
  },
  {
    path: 'join-tourney/:tourneyName',
    loadChildren: () => import('./join-tourney/join-tourney.module').then( m => m.JoinTourneyPageModule)
  },
  {
    path: 'game-scoring/:tourneyId',
    loadChildren: () => import('./game-scoring/game-scoring.module').then( m => m.GameScoringPageModule)
  },
  {
    path: 'setup-game/:tourneyId',
    loadChildren: () => import('./setup-game/setup-game.module').then( m => m.SetupGamePageModule)
  }


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules 
      , useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
