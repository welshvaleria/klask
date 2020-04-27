import { Component, OnInit } from '@angular/core';
import { KlaskService } from '../klask.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-win-loss-stats',
  templateUrl: './win-loss-stats.page.html',
  styleUrls: ['./win-loss-stats.page.scss'],
})
export class WinLossStatsPage implements OnInit {

  constructor(
    private klaskSvc: KlaskService
    , private activatedRoute: ActivatedRoute
  ) { }

  results: any[];
  simplifiedWinsLosses: any[];
  possibleForSorting: any[];

  ngOnInit() {
    this.results = this.klaskSvc.getTournamentGameResults(
      this.activatedRoute.snapshot.paramMap.get("tourneyId")
    );

    // Reducing data to get wins/losses per player
    const winsLosses = this.results.reduce(
      (acc, x) => {

        // Setting the wins for each player
        acc.set(x.winner, {
          // If the person has won before, add one. Else it's just 1
          wins: acc.get(x.winner) ? acc.get(x.winner).wins + 1 : 1
          //Losses will always stay at 0 here.
          , losses: acc.get(x.winner) ? acc.get(x.winner).losses : 0
        });

        // Setting the losses for each player.
        acc.set(x.loser, {
          //Wins will always stay at what was previously set here
          wins: acc.get(x.loser) ? acc.get(x.loser).wins : 0
          // If the person has lost before, add one. Else it's just 1
          , losses: acc.get(x.loser) ? acc.get(x.loser).losses + 1 : 1
        });

        return acc;
      }
      , new Map()
    );

    //Spread the Map into a new array that will be cleaned down to name, wins, losses, and winPercentage
    this.simplifiedWinsLosses = [...winsLosses].map(x => ({
      name: x[0]
      , wins: x[1].wins
      , losses: x[1].losses
      , winPercentage: (x[1].wins / (x[1].wins + x[1].losses)).toFixed(3)
    }));

    this.possibleForSorting = this.simplifiedWinsLosses.map(x => ({
      ...x
      , sort: x.winPercentage * 1000 + x.wins + x.losses
    }));

    this.possibleForSorting.sort((a, b) => b.sort - a.sort);
  }

  fauxPlayGame() {
    this.klaskSvc.saveNewGameResult(
      "-1"
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
        , tourneyName: "mita"
        , gameNumber: 1 
        , winner: "Trevor"
        , loser: "Tom" 
        , points: [
            { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 1
              , scorerPointNumber: 1
              , pointType: "score"
              , opponent: "Trevor" 
            }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Trevor"
              , gamePointNumber: 2
              , scorerPointNumber: 1
              , pointType:	"klask"
              , opponent:	"Tom" 
            }
            , { 
              pointDateTime: "some datetime"
              , scorer: "Trevor"
              , gamePointNumber: 3
              , scorerPointNumber: 2
              , pointType:	"score"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 4
              , scorerPointNumber: 2
              , pointType: "biscuit"
              , opponent: "Trevor" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 5
              , scorerPointNumber: 3
              , pointType: "score"
              , opponent:	"Trevor" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 6
              , scorerPointNumber: 4
              , pointType: "score"
              , opponent:	"Trevor" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Trevor"
              , gamePointNumber: 7
              , scorerPointNumber: 3
              , pointType:	"biscuit"
              , opponent:	"Tom" 
          }

          , {
              pointDateTime: "some datetime"
              , scorer: "Trevor"
              , gamePointNumber: 8
              , scorerPointNumber: 4
              , pointType:	"score"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Trevor"
              , gamePointNumber: 9
              , scorerPointNumber: 5
              , pointType:	"loss-control"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Trevor"
              , gamePointNumber: 10
              , scorerPointNumber: 6
              , pointType:	"score"
              , opponent:	"Tom" 
          }
        ]
      }
    );
  }
}
