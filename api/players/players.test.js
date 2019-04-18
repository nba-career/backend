const db = require("../../data/dbConfig.js");
const Players = require("./playersModel.js");
const request = require("supertest");
const server = require("../server.js");

describe("players model", () => {
//   beforeEach(async () => {
//     await db("players").truncate();
//   });

  describe("getById()", () => {
    it("should get a player by id", async () => {
      // Insert a couple games
      await Players.insert({
        "id": 1,
        "player": "Robert Parish",
        "allNba": 2,
        "allStar": 9,
        "draftYear": 1976,
        "pick": 8,
        "team": "GSW",
        "college": "Centenary College of Louisiana",
        "years": 21,
        "games": 1611,
        "minutesPlayed": 45704,
        "points": 23334,
        "trb": 14715,
        "totalAssists": 2180,
        "fgPercent": 0.537,
        "tpPercent": 0,
        "ftPercent": 0.721,
        "minutesPerGame": 28.4,
        "pointsPerGame": 14.5,
        "trbPerGame": 9.1,
        "assitsPerGame": 1.4,
        "winShare": 147,
        "wsPerGame": 0.154,
        "bpm": 1.6,
        "vorp": 41.5,
        "executive": "Al Attles",
        "tenure": "3641 days 00:00:00.000000000",
        "executiveId": 1,
        "execDraftExp": 1,
        "attendCollege": 1,
        "firstYear": 0,
        "secondYear": 0,
        "thirdYear": 0,
        "fourthYear": 0,
        "fifthYear": 0
    });
      const players = await db("players");
      expect(players).toHaveLength(1);

      // Remove the second one by id
      const getPlayerId = await Players.getById(1);
      expect(getPlayerId.player).toBe("Robert Parish");
    });
  });
});
