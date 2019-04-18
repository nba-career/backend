const express = require("express");

const Players = require("./playersModel.js");

const router = express.Router();

// GET /api/players
// Get all players
router.get("/", async (req, res) => {
  try {
    const player = await Players.get(req.query);
    res.status(200).json(player);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the players"
    });
  }
});

// GET /api/players/:id
// Get a player by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Players.getById(id)
    .then(player => {
      if (!player) {
        res
          .status(404)
          .json({ message: "The player with the specified ID does not exist." });
      } else {
        res.status(200).json(player);
      }
    })
    .catch(error => {
      res.status(404).json({ message: "The player could not be retrieved." });
    });
});

// POST /api/players/
// Add a player
router.post("/", (req, res) => {
  const playerInfo = req.body;
  console.log("game information", playerInfo);

  Players.insert(playerInfo)
    .then(player => {
      if (!playerInfo.player) {
        res
          .status(422)
          .json({ message: "Please provide the name of the player." });
      } else {
        res.status(201).json(player);
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error while saving the player to the database"
      });
    });
});

module.exports = router;
