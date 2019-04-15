const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
};

function get() {
  return db("players");
}

function getById(id) {
  return db("players")
    .where({ id })
    .first();
}