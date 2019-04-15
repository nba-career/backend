const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  getAllNames
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
    .select("player");
}
