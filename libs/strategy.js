const passport = require('passport');
const Users = require('../models').Users;
const bcrypt = require('bcrypt');

const Basic = require('passport-http').BasicStrategy;
// const Bearer = require('passport-http-bearer').Strategy;

module.exports = () => {
  passport.use(
    new Basic(async function (login, senha, done) {
      try {
        const usuario = await Users.findOne({ where: { login: login } });
        const validacaoSenha = await bcrypt.compare(senha, usuario.senha);

        if (!usuario || !validacaoSenha) {
          return done(null, false);
        }

        return done(null, usuario);
      } catch (e) {
        return done(e);
      }
    })
  );

  // passport.use(new Bearer((token, done) => {}));
};
