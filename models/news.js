'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    caption: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.STRING,
    references: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};