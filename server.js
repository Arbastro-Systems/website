const bodyparser = require("body-parser");
const session = require("express-session");
const path = require("path");
const ejs = require("ejs");
const url = require("url");
const moment = require('moment')
var clc = require("cli-color");

const passport = require('passport')
const { Strategy } = require('passport-discord-auth');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


// Database Setup
const mongoose = require('mongoose');
const { connectDb } = require('./database/connect')
const userSchema = require('./database/models/User')

app.use(bodyparser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req,res) => {
  res.render('index');
})

/*passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: '',
      clientSecret: '',
      callbackURL: 'https://arbastro.com/api/auth/discord/callback',
      scope: ['identify', 'guilds'],
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

app.get('/api/auth/discord')
app.get(
  '/api/auth/discord/callback',
  passport.authenticate('discord', {
    failureRedirect: '/auth/login/err=Failed+Discord+Login',
  }),
  (req, res) => {
    const userS = userSchema.findOne({ discordUsername: req.user.username })
  
    if (userS) {
      res.redirect('dash')
    } else {
      res.redirect('/auth/login', { connectType: 'Discord'})
    }
  }
); */

app.get('/login', (req,res) => {
  res.render('login', { connectType: 'None', error: 'None' })
})

app.listen(PORT, () => {
  console.log('Successfully started server')
})
