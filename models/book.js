'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    name: DataTypes.STRING,
    user: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    credit: DataTypes.INTEGER,
    debit: DataTypes.INTEGER,
    meta: DataTypes.STRING,
    account: {
      type: DataTypes.UUID,
      references: {
        model: 'Accounts',
        key: 'id'
      }
    },
    article: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.ENUM(['Verified', 'Voided'])
  }, {
    sequelize,
    modelName: 'Book',
  });
  Book.beforeCreate( book => book.id= uuid());
  return Book;
};