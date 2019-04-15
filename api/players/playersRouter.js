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
    .then(players => {
      if (!players) {
        res
          .status(404)
          .json({ message: "The player with the specified ID does not exist." });
      } else {
        res.status(200).json(players);
      }
    })
    .catch(error => {
      res.status(404).json({ message: "The player could not be retrieved." });
    });
});

module.exports = router;