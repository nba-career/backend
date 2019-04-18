const express = require("express");

const Players = require("./teamsModel.js");

const router = express.Router();

// GET /api/teams
// Get all teams
router.get("/", async (req, res) => {
  try {
    const teams = await Players.get(req.query);
    res.status(200).json(teams);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the teams"
    });
  }
});

// GET /api/teams/:team
// Get current roster of a team
router.get("/:team", (req, res) => {
  const { team } = req.params;
  Players.getRoster(team)
    .then(players => {
      if (!players) {
        res
          .status(404)
          .json({ message: "The team does not exist." });
      } else {
        res.status(200).json(players);
      }
    })
    .catch(error => {
      res.status(404).json({ message: "The roster could not be retrieved." });
    });
});


module.exports = router;
