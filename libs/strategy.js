const passport = require('passport');
const Basic = require('passport-http').BasicStrategy;
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
  passport.use(
    new Basic(async function (login, senha, done) {
      try {
        console.log(login);
        const usuario = await db.Users.findOne({ where: { login: login } });
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
          return done(null, false);
        }

        return done(null, usuario);
      } catch (e) {
        return done(e);
      }
    })
  );
};
