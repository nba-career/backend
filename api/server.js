const express = require('express');
const cors = require('cors');

// const players = require('./players/playersModel.js');

const server = express();

server.use(express.json());
server.use(cors());
const playersRouter = require('./players/playersRouter.js');


server.use('/api/players', playersRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: "NBA" });
});

module.exports = server;