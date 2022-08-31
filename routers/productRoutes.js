const ProductController = require('../controllers/productController');
const strategy = require('../libs/middlewares-strategy');

module.exports = app => {
  app
    .route('/products')
    .get(ProductController.findAll)
    .post(ProductController.create);

  app
    .route('/products/:id')
    .get(ProductController.findById)
    .put(ProductController.update)
    .delete(ProductController.delete);
};
