'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Information', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      place: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      placeImage: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      company: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      companyImage: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      immersionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'immersions',
          key: 'id'
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Information');
  }
};