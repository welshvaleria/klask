import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KlaskService {

  constructor() { }

  getTournamentGameResults(tourneyId: string) {
    return [
      { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria", pointType:	"klask", opponent:	"Tom" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria", pointType:	"score", opponent:	"Tom" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "biscuit", opponent: "Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Tom", pointType: "score", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria", pointType:	"biscuit", opponent:	"Tom" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria", pointType:	"score", opponent:	"Tom" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria", pointType:	"loss-control", opponent:	"Tom" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	1, pointDateTime: "some datetime", scorer: "Valeria", pointType:	"score", opponent:	"Tom" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	2, pointDateTime: "some datetime", scorer: "Trevor", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom", pointType:	"forfeit", opponent:	"Valeria" }
      , { tourneyId: "some guid", tourneyName: 	"mita", gameNumber:	3, pointDateTime: "some datetime", scorer: "Tom", pointType:	"forfeit", opponent:	"Valeria" }      
    ];
  }

  // ? ? ?
  getTournaments() {
    return [
      {}
    ];
  }
}
