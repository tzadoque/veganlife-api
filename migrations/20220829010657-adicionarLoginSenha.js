'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'Users',
          'login',
          { type: Sequelize.DataTypes.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Users',
          'senha',
          { type: Sequelize.DataTypes.STRING },
          { transaction: t }
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'login', { transaction: t }),
        queryInterface.removeColumn('Users', 'senha', { transaction: t }),
      ]);
    });
  },
};
