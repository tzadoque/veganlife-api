const passport = require('passport');
const UserController = require('../controllers/userController');

module.exports = app => {
  app.get('/users', UserController.findAll);

  app.route('/users').get(UserController.findAll).post(UserController.create);

  app
    .route('/users/:id')
    .get(UserController.findById)
    .put(UserController.update)
    .delete(UserController.delete);

  app
    .route('/users/login')
    .get(
      passport.authenticate('basic', { session: false }),
      UserController.login
    );
};
