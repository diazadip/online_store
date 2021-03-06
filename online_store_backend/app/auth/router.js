// (1) import package yang diperlukan
const router = require('express').Router();
const multer = require('multer');
const passport = require('passport');
const controller = require('./controller');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField: 'email'}, controller.localStrategy));

// (2) import auth/controller.js

// (3) buat endpoint untuk register user baru
router.post('/register', multer().none(), controller.register);
router.post('/login', multer().none(), controller.login);
router.get('/me', controller.me);

// (4) export router
module.exports = router;