const db = require("../../data/dbConfig.js");

module.exports = {
  get,
};

function get() {
  // select distinct 'teams' from players
  return db("players")
  .distinct('team')
  .orderBy('team')
}
