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


module.exports = router;
