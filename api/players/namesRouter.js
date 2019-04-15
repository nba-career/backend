const express = require("express");

const Players = require("./playersModel.js");

const router = express.Router();

// GET /api/players/names
// Get all players names
router.get("/", async (req, res) => {
    try {
      const player = await Players.getAllNames(req.query);
      res.status(200).json(player);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the players names"
      });
    }
});

module.exports = router;
