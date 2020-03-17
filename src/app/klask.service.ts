import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KlaskService {

  constructor() { }

  getTournamentGameResults(tourneyId: string) {
    return [
      {
          tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
        , tourneyName: "mita"
        , gameNumber: 1 
        , winner: "Valeria"
        , loser: "Tom" 
        , points: [
            { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 1
              , scorerPointNumber: 1
              , pointType: "score"
              , opponent: "Valeria" 
            }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria", gamePointNumber: 2
              , scorerPointNumber: 1
              , pointType:	"klask"
              , opponent:	"Tom" 
            }
            , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria", gamePointNumber: 3
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
              , opponent: "Valeria" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 5
              , scorerPointNumber: 3
              , pointType: "score"
              , opponent:	"Valeria" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 6
              , scorerPointNumber: 4
              , pointType: "score"
              , opponent:	"Valeria" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria", gamePointNumber: 7
              , scorerPointNumber: 3
              , pointType:	"biscuit"
              , opponent:	"Tom" 
          }

          , {
              pointDateTime: "some datetime"
              , scorer: "Valeria", gamePointNumber: 8
              , scorerPointNumber: 4
              , pointType:	"score"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria", gamePointNumber: 9
              , scorerPointNumber: 5
              , pointType:	"loss-control"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria", gamePointNumber: 10
              , scorerPointNumber: 6
              , pointType:	"score"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Trevor", gamePointNumber: 1
              , scorerPointNumber: 1
              , pointType:	"forfeit"
              , opponent:	"Valeria" 
          }
        ]
      }
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
      , tourneyName: "mita"
      , gameNumber: 2 
      , winner: "Trevor"
      , loser: "Valeria" 
      , points: [
          { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 1
            , scorerPointNumber: 1
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 2
            , scorerPointNumber: 2
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 3
            , scorerPointNumber: 3
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 4
            , scorerPointNumber: 4
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 5
            , scorerPointNumber: 5
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 6
            , scorerPointNumber: 6
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
        ]
      }
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
      , tourneyName: "mita"
      , gameNumber: 3
      , winner: "Tom"
      , loser: "Valeria" 
      , points: [
          { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 1
            , scorerPointNumber: 1
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 2
            , scorerPointNumber: 2
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 3
            , scorerPointNumber: 3
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 4
            , scorerPointNumber: 4
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 5
            , scorerPointNumber: 5
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 6
            , scorerPointNumber: 6
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
        ]
      }
    ];
  }

  // ? ? ?
  getTournaments() {
    return [
      {}
    ];
  }
}
