const express = require('express');

// const players = require('./players/playersModel.js');

const server = express();

server.use(express.json());
const playersRouter = require('./players/playersRouter.js');


server.use('/api/players', playersRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: "NBA" });
});

module.exports = server;