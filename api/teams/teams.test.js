const db = require("../../data/dbConfig.js");
const Players = require("./teamsModel.js");
const request = require("supertest");
const server = require("../server.js");

// describe("teams model not working yet", () => {
//   beforeEach(async () => {
//     await db("players").truncate();
//   });

//   describe("get()", () => {
//     it("should get all teams", async () => {
//       // Insert player
//       await Players.insert({
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
//       }
//       );
//       await Players.insert({
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
//     });
//       const players = await db("players");
//       expect(players).toHaveLength(2);

//       const getPlayers = await Players.get();
//       expect(getPlayers).toHaveLength(2);
//     });
//   });

//   describe("getRoster()", () => {
//     it("should get a roster by team", async () => {
//       // Insert player
//       await Players.insert({
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
//       });
//       const players = await db("players");
//       expect(players).toHaveLength(1);

//       const getPlayerId = await Players.getRoster(GSW);
//       expect(getPlayerId.player).toBe("Robert Parish");
//     });
//   });
// });

// describe("namesRouter", () => {
//   beforeEach(async () => {
//     await db("players").truncate();
//   });

//   describe("getAllNames()", () => {
//     it("should get all players names", async () => {
//       // Insert players
//       await Players.insert({
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
//       }
//       );
//       await Players.insert({
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
//     });
//       const players = await db("players");
//       expect(players).toHaveLength(2);

//       const getPlayersNames = await Players.getAllNames();
//       expect(getPlayersNames).toEqual([{"id": 1, "player": "Robert Parish"}, {"id": 2, "player": "Sonny Parker"}]);
//     });
//   });
// });


describe("server.js", () => {
    beforeEach(async () => {
      await db("players").truncate();
      await db("users").truncate();
    });
  
    describe("GET /", () => {
      it("should respond with 200 OK", () => {
        return request(server)
          .get("/")
          .expect(200);
      });
  
      it("should be JSON", () => {
        return request(server)
          .get("/")
          .expect("Content-Type", /json/);
      });
  
      it("should get return {'It's alive!' }", () => {
        return request(server)
          .get("/")
          .then(res => {
            expect(res.body.api).toBe("NBA");
          });
      });
    });
    
  });