const passport = require('passport');
const Basic = require('passport-http').BasicStrategy;
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
  passport.use(
    new Basic(async function (email, password, done) {
      try {
        console.log(email);
        const usuario = await db.Users.findOne({ where: { email: email } });
        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
          return done(null, false);
        }

        return done(null, usuario);
      } catch (e) {
        return done(e);
      }
    })
  );
};
