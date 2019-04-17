exports.seed = function(knex, Promise) {
  return
  // Deletes ALL existing entries and resets ids
  // return knex("players")
  //   .truncate()
  //   .then(function() {
  //     return knex("players").insert([
  //       {
  //         id: 1,
  //         player: "Robert Parish",
  //         allNba: 2,
  //         allStar: 9,
  //         draftYear: 1976,
  //         pick: 8,
  //         team: "GSW",
  //         college: "Centenary College of Louisiana",
  //         years: 21,
  //         games: 1611,
  //         minutesPlayed: 45704,
  //         points: 23334,
  //         trb: 14715,
  //         totalAssists: 2180,
  //         fgPercent: 0.537,
  //         tpPercent: 0,
  //         ftPercent: 0.721,
  //         minutesPerGame: 28.4,
  //         pointsPerGame: 14.5,
  //         trbPerGame: 9.1,
  //         assitsPerGame: 1.4,
  //         winShare: 147,
  //         wsPerGame: 0.154,
  //         bpm: 1.6,
  //         vorp: 41.5,
  //         executive: "Al Attles",
  //         tenure: "3641 days 00:00:00.000000000",
  //         executiveId: 1,
  //         execDraftExp: 1,
  //         attendCollege: 1,
  //         firstYear: 0,
  //         secondYear: 0,
  //         thirdYear: 0,
  //         fourthYear: 0,
  //         fifthYear: 0
  //       },
  //       {
  //         "id": 2,
  //         "player": "Sonny Parker",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 17,
  //         "team": "GSW",
  //         "college": "Texas A&M University",
  //         "years": 6,
  //         "games": 452,
  //         "minutesPlayed": 10916,
  //         "points": 4471,
  //         "trb": 1841,
  //         "totalAssists": 954,
  //         "fgPercent": 0.501,
  //         "tpPercent": 0,
  //         "ftPercent": 0.755,
  //         "minutesPerGame": 24.2,
  //         "pointsPerGame": 9.9,
  //         "trbPerGame": 4.1,
  //         "assitsPerGame": 2.1,
  //         "winShare": 26.9,
  //         "wsPerGame": 0.118,
  //         "bpm": 2.2,
  //         "vorp": 11.5,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 3,
  //         "player": "Marshall Rogers",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 34,
  //         "team": "GSW",
  //         "college": "University of Texas-Pan American",
  //         "years": 1,
  //         "games": 26,
  //         "minutesPlayed": 176,
  //         "points": 100,
  //         "trb": 11,
  //         "totalAssists": 10,
  //         "fgPercent": 0.371,
  //         "tpPercent": 0,
  //         "ftPercent": 0.933,
  //         "minutesPerGame": 6.8,
  //         "pointsPerGame": 3.8,
  //         "trbPerGame": 0.4,
  //         "assitsPerGame": 0.4,
  //         "winShare": -0.2,
  //         "wsPerGame": -0.043,
  //         "bpm": -9.9,
  //         "vorp": -0.4,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 4,
  //         "player": "Jeff Fosnes",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 68,
  //         "team": "GSW",
  //         "college": "Vanderbilt University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 5,
  //         "player": "Carl Bird",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 86,
  //         "team": "GSW",
  //         "college": "University of California",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 6,
  //         "player": "Duane Barnett",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 91,
  //         "team": "GSW",
  //         "college": "Stanford University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 7,
  //         "player": "Gene Cunningham",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 104,
  //         "team": "GSW",
  //         "college": "Norfolk State University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 8,
  //         "player": "Jesse Campbell",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 122,
  //         "team": "GSW",
  //         "college": "Mercyhurst College",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 9,
  //         "player": "Stan Boskovich",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 140,
  //         "team": "GSW",
  //         "college": "West Virginia University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 10,
  //         "player": "Howard Smith",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 157,
  //         "team": "GSW",
  //         "college": "University of San Francisco",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 11,
  //         "player": "Ken Smith",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1976,
  //         "pick": 173,
  //         "team": "GSW",
  //         "college": "San Diego State University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 1,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 12,
  //         "player": "Rickey Green",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 16,
  //         "team": "GSW",
  //         "college": "University of Michigan",
  //         "years": 14,
  //         "games": 946,
  //         "minutesPlayed": 23271,
  //         "points": 8870,
  //         "trb": 1819,
  //         "totalAssists": 5221,
  //         "fgPercent": 0.469,
  //         "tpPercent": 0.207,
  //         "ftPercent": 0.807,
  //         "minutesPerGame": 24.6,
  //         "pointsPerGame": 9.4,
  //         "trbPerGame": 1.9,
  //         "assitsPerGame": 5.5,
  //         "winShare": 47.2,
  //         "wsPerGame": 0.097,
  //         "bpm": -1,
  //         "vorp": 5.8,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 13,
  //         "player": "Wesley Cox",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 18,
  //         "team": "GSW",
  //         "college": "University of Louisville",
  //         "years": 2,
  //         "games": 74,
  //         "minutesPlayed": 813,
  //         "points": 342,
  //         "trb": 206,
  //         "totalAssists": 23,
  //         "fgPercent": 0.412,
  //         "tpPercent": 0,
  //         "ftPercent": 0.51,
  //         "minutesPerGame": 11,
  //         "pointsPerGame": 4.6,
  //         "trbPerGame": 2.8,
  //         "assitsPerGame": 0.3,
  //         "winShare": 0.1,
  //         "wsPerGame": 0.007,
  //         "bpm": -6.9,
  //         "vorp": -1,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 14,
  //         "player": "Ricky Love",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 38,
  //         "team": "GSW",
  //         "college": "University of Alabama at Huntsville",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 15,
  //         "player": "Marlon Redmond",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 60,
  //         "team": "GSW",
  //         "college": "University of San Francisco",
  //         "years": 2,
  //         "games": 77,
  //         "minutesPlayed": 1057,
  //         "points": 499,
  //         "trb": 161,
  //         "totalAssists": 77,
  //         "fgPercent": 0.423,
  //         "tpPercent": 0,
  //         "ftPercent": 0.655,
  //         "minutesPerGame": 13.7,
  //         "pointsPerGame": 6.5,
  //         "trbPerGame": 2.1,
  //         "assitsPerGame": 1,
  //         "winShare": 0.6,
  //         "wsPerGame": 0.026,
  //         "bpm": -3.8,
  //         "vorp": -0.5,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 16,
  //         "player": "Roy Smith",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 82,
  //         "team": "GSW",
  //         "college": "Kentucky State University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 17,
  //         "player": "Leartha Scott",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 87,
  //         "team": "GSW",
  //         "college": "University of Wisconsin-Parkside",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 18,
  //         "player": "Ray Epps",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 104,
  //         "team": "GSW",
  //         "college": "Norfolk State University",
  //         "years": 1,
  //         "games": 13,
  //         "minutesPlayed": 72,
  //         "points": 26,
  //         "trb": 5,
  //         "totalAssists": 2,
  //         "fgPercent": 0.435,
  //         "tpPercent": 0,
  //         "ftPercent": 0.75,
  //         "minutesPerGame": 5.5,
  //         "pointsPerGame": 2,
  //         "trbPerGame": 0.4,
  //         "assitsPerGame": 0.2,
  //         "winShare": 0.1,
  //         "wsPerGame": 0.057,
  //         "bpm": -6.9,
  //         "vorp": -0.1,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 19,
  //         "player": "Jack Phelan",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 126,
  //         "team": "GSW",
  //         "college": "Saint Francis University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 20,
  //         "player": "Jerry Thurston",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 146,
  //         "team": "GSW",
  //         "college": "Mercer University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 21,
  //         "player": "Ricky Marsh",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1977,
  //         "pick": 165,
  //         "team": "GSW",
  //         "college": "Manhattan College",
  //         "years": 1,
  //         "games": 60,
  //         "minutesPlayed": 851,
  //         "points": 269,
  //         "trb": 75,
  //         "totalAssists": 90,
  //         "fgPercent": 0.426,
  //         "tpPercent": 0,
  //         "ftPercent": 0.697,
  //         "minutesPerGame": 14.2,
  //         "pointsPerGame": 4.5,
  //         "trbPerGame": 1.3,
  //         "assitsPerGame": 1.5,
  //         "winShare": 0.5,
  //         "wsPerGame": 0.028,
  //         "bpm": -4.3,
  //         "vorp": -0.5,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 2,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 22,
  //         "player": "Purvis Short",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 5,
  //         "team": "GSW",
  //         "college": "Jackson State University",
  //         "years": 12,
  //         "games": 842,
  //         "minutesPlayed": 24549,
  //         "points": 14607,
  //         "trb": 3625,
  //         "totalAssists": 2123,
  //         "fgPercent": 0.474,
  //         "tpPercent": 0.282,
  //         "ftPercent": 0.824,
  //         "minutesPerGame": 29.2,
  //         "pointsPerGame": 17.3,
  //         "trbPerGame": 4.3,
  //         "assitsPerGame": 2.5,
  //         "winShare": 51.1,
  //         "wsPerGame": 0.1,
  //         "bpm": -0.1,
  //         "vorp": 11.6,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 23,
  //         "player": "Raymond Townsend",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 22,
  //         "team": "GSW",
  //         "college": "University of California, Los Angeles",
  //         "years": 3,
  //         "games": 154,
  //         "minutesPlayed": 2025,
  //         "points": 745,
  //         "trb": 157,
  //         "totalAssists": 217,
  //         "fgPercent": 0.411,
  //         "tpPercent": 0.171,
  //         "ftPercent": 0.703,
  //         "minutesPerGame": 13.1,
  //         "pointsPerGame": 4.8,
  //         "trbPerGame": 1,
  //         "assitsPerGame": 1.4,
  //         "winShare": 1,
  //         "wsPerGame": 0.023,
  //         "bpm": -4.6,
  //         "vorp": -1.3,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 24,
  //         "player": "Wayne Cooper",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 40,
  //         "team": "GSW",
  //         "college": "University of New Orleans",
  //         "years": 14,
  //         "games": 984,
  //         "minutesPlayed": 20274,
  //         "points": 7777,
  //         "trb": 6095,
  //         "totalAssists": 852,
  //         "fgPercent": 0.457,
  //         "tpPercent": 0.146,
  //         "ftPercent": 0.736,
  //         "minutesPerGame": 20.6,
  //         "pointsPerGame": 7.9,
  //         "trbPerGame": 6.2,
  //         "assitsPerGame": 0.9,
  //         "winShare": 36.9,
  //         "wsPerGame": 0.087,
  //         "bpm": -1.7,
  //         "vorp": 1.4,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 25,
  //         "player": "Steve Neff",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 56,
  //         "team": "GSW",
  //         "college": "Southern Nazarene University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 26,
  //         "player": "Derrick Jackson",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 77,
  //         "team": "GSW",
  //         "college": "Georgetown University",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 27,
  //         "player": "Bubba Wilson",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 101,
  //         "team": "GSW",
  //         "college": "Western Carolina University",
  //         "years": 1,
  //         "games": 16,
  //         "minutesPlayed": 143,
  //         "points": 17,
  //         "trb": 16,
  //         "totalAssists": 12,
  //         "fgPercent": 0.28,
  //         "tpPercent": 0,
  //         "ftPercent": 0.5,
  //         "minutesPerGame": 8.9,
  //         "pointsPerGame": 1.1,
  //         "trbPerGame": 1,
  //         "assitsPerGame": 0.8,
  //         "winShare": -0.2,
  //         "wsPerGame": -0.064,
  //         "bpm": -7.5,
  //         "vorp": -0.2,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //       {
  //         "id": 28,
  //         "player": "Buzz Hartnett",
  //         "allNba": 0,
  //         "allStar": 0,
  //         "draftYear": 1978,
  //         "pick": 122,
  //         "team": "GSW",
  //         "college": "University of San Diego",
  //         "years": 0,
  //         "games": 0,
  //         "minutesPlayed": 0,
  //         "points": 0,
  //         "trb": 0,
  //         "totalAssists": 0,
  //         "fgPercent": 0,
  //         "tpPercent": 0,
  //         "ftPercent": 0,
  //         "minutesPerGame": 0,
  //         "pointsPerGame": 0,
  //         "trbPerGame": 0,
  //         "assitsPerGame": 0,
  //         "winShare": 0,
  //         "wsPerGame": 0,
  //         "bpm": 0,
  //         "vorp": 0,
  //         "executive": "Al Attles",
  //         "tenure": "3641 days 00:00:00.000000000",
  //         "executiveId": 1,
  //         "execDraftExp": 3,
  //         "attendCollege": 1,
  //         "firstYear": 0,
  //         "secondYear": 0,
  //         "thirdYear": 0,
  //         "fourthYear": 0,
  //         "fifthYear": 0
  //       },
  //     ]);
  //   });
};
