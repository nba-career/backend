const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

const authRouter = require("./auth/authRouter.js");
const namesRouter = require("./players/namesRouter.js");
const playersRouter = require("./players/playersRouter.js");
const teamsRouter = require("./teams/teamsRouter.js");
const usersRouter = require("./users/usersRouter.js");

server.use("/api/auth", authRouter);
server.use("/api/players/names", namesRouter);
server.use("/api/players", playersRouter);
server.use("/api/teams", teamsRouter);
server.use("/api/users", usersRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ api: "NBA" });
});


//////////////////////////////
// Endpoint that makes a call to the sum.py python file
const { PythonShell } = require("python-shell");

server.get("/sum", callSUM);

function callSUM(req, res) {
  let options = {
    mode: "text",
    pythonPath: "python",
    pythonOptions: ["-u"],
    scriptPath: "",

    args: [
      parseInt(req.query.a),
      parseInt(req.query.b),
      parseInt(req.query.c),
      parseInt(req.query.d)
    ]
  };
  let pySUM = new PythonShell("sum.py", options);
  pySUM.send(JSON.stringify(options.args));
  pySUM.on("message", message => {
    res.send(message);
  });

  pySUM.end(function(err) {
    if (err) {
      throw err;
    }
  });
}
////////////////////////////////

//////////////////////////////
// Endpoint that makes a call to the survival python file
// const { PythonShell } = require("python-shell");

server.get("/survival", callSUM);

function callSUM(req, res) {
  let options = {
    mode: "text",
    pythonPath: "python",
    pythonOptions: ["-u"],
    scriptPath: "./python",

    // args: [2000, "G"]
  };
  // req.body.era
  // req.body.position

  let pySurvival = new PythonShell("nba_survival.py", options);
  pySurvival.send(JSON.stringify( [2000], ["G"] ));
  pySurvival.on("message", message => {
    res.send(message);
  });

  pySurvival.end(function(err) {
    if (err) {
      throw err;
    }
  });
}
////////////////////////////////


module.exports = server;
