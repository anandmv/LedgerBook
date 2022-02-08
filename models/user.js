'use strict';
const { Model } = require('sequelize');
const bcrypt = require("bcrypt");
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    validPassword(password){
      return bcrypt.compareSync(password, this.password);
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.ENUM(['Admin', 'Accountant'])
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        console.log(user)
        const salt = bcrypt.genSaltSync();
        user.id = uuid();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    modelName: 'User',
  });
  return User;
};