const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require ('../secrets.js').jwtSecret;
const Users = require('../users/usersModel.js');

// POST /api/auth/register
router.post('/register', (req, res) => {
  if(req.body.username && req.body.password) {  
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14); // 2 ^ n
  user.password = hash;

  
    Users.add(user)
        .then(saved => {
        res.status(201).json(saved);
        })
        .catch(error => {
        res.status(500).json(error);
        });
  } else {
    res.status(401).json({ message: 'Please under a username and password' });
  }
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
