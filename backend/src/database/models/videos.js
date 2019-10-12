'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Videos', {
    filesName: DataTypes.STRING,
    transcription: DataTypes.STRING,
    immersionId: DataTypes.INTEGER
  }, {});
  Videos.associate = models => {
    Videos.belongsTo(models.Immersion, { foreignKey: 'immersionId', as: 'immersion' })
  };
  return Videos;
};