'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Information', {
    place: DataTypes.TEXT,
    placeImage: DataTypes.TEXT ,
    company: DataTypes.TEXT,
    companyImage: DataTypes.TEXT,
    immersionId: DataTypes.INTEGER
  }, {});
  Videos.associate = models => {
    Videos.belongsTo(models.Immersion, { foreignKey: 'immersionId', as: 'immersion' })
  };
  return Videos;
};