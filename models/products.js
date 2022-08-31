'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      category: DataTypes.ENUM(
        'bebidas',
        'proteinas',
        'graos_e_cereais',
        'higiene_e_beleza',
        'hortifruti',
        'limpeza',
        'mercearia'
      ),
      type: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );
  return Products;
};
