const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  getAllNames,
  insert,
};

function get() {
  return db("players");
}

function getById(id) {
  return db("players")
    .where({ id })
    .first();
}

function getAllNames() {
  return db("players")
    .select("id", "player");
}

function insert(player) {
  return db("players")
    .insert(player)
    .then(ids => {
      return getById(ids[0]);
    });
}
