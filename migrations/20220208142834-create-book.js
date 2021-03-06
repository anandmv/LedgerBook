'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      credit: {
        type: Sequelize.INTEGER
      },
      debit: {
        type: Sequelize.INTEGER
      },
      meta: {
        type: Sequelize.JSON
      },
      account: {
        type: Sequelize.UUID,
        references: {
          model: 'Accounts',
          key: 'id'
        }
      },
      article: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: [
          'Verified',
          'Voided',
        ],
        defaultValue: 'Verified'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};