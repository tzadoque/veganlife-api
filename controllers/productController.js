const db = require('../models');

class ProductController {
  static findAll = async (req, res) => {
    try {
      const products = await db.Products.findAll();
      return res.status(200).json(products);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };

  static create = async (req, res) => {
    const json = req.body;
    console.log(req.body);

    try {
      const product = await db.Products.create(json);
      return res.status(200).json(product);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };

  static findById = async (req, res) => {
    const { id } = req.params;

    try {
      const product = await db.Products.findOne({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(product);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    const json = req.body;

    try {
      await db.products.update(json, {
        where: {
          id: Number(id),
        },
        individualHooks: true,
      });

      const product = await db.Products.findOne({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(product);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;

    try {
      await db.Products.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ mensagem: `Produto ${id} apagado!` });
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };
}

module.exports = ProductController;
