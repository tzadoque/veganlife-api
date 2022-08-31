const passport = require('passport');

module.exports = {
  basic: (req, res, next) => {
    passport.authenticate('basic', { session: false }, (erro, user) => {
      let code = erro ? 500 : !user ? 401 : 204;
      if (code == 204) {
        req.user = user;
        return next();
      }
      return res.status(code).send();
    })(req, res, next);
  },
};
