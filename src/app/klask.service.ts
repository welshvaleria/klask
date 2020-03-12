import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KlaskService {

  constructor() { }

  getTournamentGameResults(tourneyId: string) {
    return [
      { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria	klask	Tom
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria	score	Tom
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom	biscuit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom	score	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom	score	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria	biscuit	Tom
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria	score	Tom
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria	loss-control	Tom
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria	score	Tom
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor	forfeit-Valeria	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom	forfeit	Valeria
      // { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom	forfeit	Valeria      
    ];
  }
}
