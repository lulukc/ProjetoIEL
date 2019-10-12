'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filesName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transcription: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Videos');
  }
};