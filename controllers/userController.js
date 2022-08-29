const db = require('../models');

class UserController {
  static login(req, res) {
    res.status(204).send('Autenticado');
  }

  static async findAll(req, res) {
    try {
      const users = await db.Users.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async create(req, res) {
    const json = req.body;
    console.log(req.body);

    try {
      const user = await db.Users.create(json);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const user = await db.Users.findOne({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const json = req.body;

    try {
      await db.Users.update(json, {
        where: {
          id: Number(id),
        },
        individualHooks: true,
      });

      const user = await db.Users.findOne({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await db.Users.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ mensagem: `Usuário ${id} apagado!` });
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

module.exports = UserController;
