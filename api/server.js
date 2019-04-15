const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const authRouter = require('./auth/authRouter.js');
const namesRouter = require('./players/namesRouter.js');
const playersRouter = require('./players/playersRouter.js');
const teamsRouter = require('./teams/teamsRouter.js');
// const usersRouter = require('./users/usersRouter.js');

server.use('/api/auth', authRouter);
server.use('/api/players/names', namesRouter);
server.use('/api/players', playersRouter);
server.use('/api/teams', teamsRouter);
// server.use('/api/users', usersRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: "NBA" });
});

module.exports = server;