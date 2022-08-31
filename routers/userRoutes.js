const passport = require('passport');
const UserController = require('../controllers/userController');
const strategy = require('../libs/middlewares-strategy');

module.exports = app => {
  app.get(
    '/auth/login',
    passport.authenticate('basic', { session: false }),
    UserController.login
  );

  app.route('/users').get(UserController.findAll).post(UserController.create);

  app
    .route('/users/:id')
    .get(UserController.findById)
    .put(UserController.update)
    .delete(UserController.delete);
};
