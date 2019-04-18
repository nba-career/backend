const db = require("../data/dbConfig.js");
const request = require("supertest");
const server = require("./server.js");
// const Games = require("../games/gamesModel.js");

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
