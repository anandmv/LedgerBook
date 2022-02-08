'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    name: DataTypes.STRING,
    article: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Account',
  });
  Account.beforeCreate( account => account.id= uuid());
  return Account;
};