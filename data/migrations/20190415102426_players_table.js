exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("players", tbl => {
      //   tbl.increments();
      tbl.integer("id", 5);
      tbl.string("player", 255).notNullable();
      tbl.integer("allNba", 4);
      tbl.integer("allStar", 4);
      tbl.integer("draftYear", 4);
      tbl.integer("pick", 4);
      tbl.string("team", 3);
      tbl.string("college", 255);
      tbl.integer("years", 4);
      tbl.integer("games", 5);
      tbl.integer("minutesPlayed", 6);
      tbl.integer("points", 6);
      tbl.integer("trb", 4);
      tbl.integer("totalAssists", 4);
      tbl.float("fgPercent");
      tbl.float("tpPercent");
      tbl.float("ftPercent");
      tbl.float("minutesPerGame");
      tbl.float("pointsPerGame");
      tbl.float("trbPerGame");
      tbl.float("assitsPerGame");
      tbl.float("winShare");
      tbl.float("wsPerGame");
      tbl.float("bpm");
      tbl.float("vorp");
      tbl.string("executive", 255);
      tbl.string("tenure", 255);
      tbl.integer("executiveId", 4);
      tbl.integer("execDraftExp", 4);
      tbl.integer("attendCollege", 4);
      tbl.integer("firstYear", 4);
      tbl.integer("secondYear", 4);
      tbl.integer("thirdYear", 4);
      tbl.integer("fourthYear", 4);
      tbl.integer("fifthYear", 4);

      tbl.integer("currentPlayer", 4);
      tbl.integer("gamesPerSeason", 4);
      tbl.integer("minutesPerSeason", 4);
      tbl.integer("predictions", 4);
      tbl.integer("yearStart", 4);
      tbl.integer("yearEnd", 4);
      tbl.string("position", 255);
      tbl.string("height", 255);
      tbl.string("weight", 255);
      tbl.string("birthDate", 255);
    })
    .createTable("users", users => {
      users.increments();

      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("players")
  .dropTableIfExists("users");
};
