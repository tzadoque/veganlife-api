'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipes.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    caption: DataTypes.STRING,
    author: DataTypes.STRING,
    prep_time: DataTypes.INTEGER,
    cook_time: DataTypes.INTEGER,
    ingredients: DataTypes.STRING,
    instructions: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipes',
  });
  return Recipes;
};