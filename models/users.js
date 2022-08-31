'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      profile_picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );

  Users.beforeCreate(async (user, options) => {
    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash;
  });

  Users.beforeUpdate(async (user, options) => {
    if (user.changed('password')) {
      const hash = await bcrypt.hash(user.password, 12);
      user.password = hash;
    }
  });

  return Users;
};
