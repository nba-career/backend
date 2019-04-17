const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getRoster,
};

function get() {
  // select distinct 'teams' from players
  return db("players")
  .distinct('team')
  .orderBy('team')
}

function getRoster(team) {
  return db("players")
    .where({ team })
    .andWhere('currentPlayer', 1);
}
