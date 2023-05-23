const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const sequelize = require('../config/database');
const { Sequelize } = require('sequelize');

const register = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, gender, address, email, password } = req.body;

  User.findOne({
    where: {
      [Sequelize.Op.or]: [
        { email: email },
        { name: name }
      ]
    }
  })
    .then((existingUser) => {
      if (existingUser) {
        if (existingUser.email === email) {
          return res.status(400).json({ error: 'Email sudah digunakan' });
        }

        if (existingUser.name === name) {
          return res.status(400).json({ error: 'Nama sudah dipakai' });
        }
      }

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;

          User.create({
            name,
            gender,
            address,
            email,
            password: hash,
          })
            .then(() => res.status(201).json({ message: 'User created successfully' }))
            .catch((err) => next(err));
        });
      });
    })
    .catch((err) => next(err));
};

const login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'email/password kamu salah. Silahkan coba lagi.' });
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          req.session.user = user;
          return res.json({ message: 'Login berhasil' });
        } else {
          return res.status(401).json({ error: 'email/password kamu salah. Silahkan coba lagi.' });
        }
      });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Logout successful' });
  });
};

module.exports = {
  register,
  login,
  logout,
};
