'use strict';
module.exports = (sequelize, DataTypes) => {
  const Immersion = sequelize.define('Immersion', {
    immersionName: DataTypes.STRING,
    immersionPlace: DataTypes.STRING,
    immersionCompany: DataTypes.STRING,
  }, {});
  Immersion.associate = function (models) {
    Immersion.hasMany(models.Users, { as: 'Immersion' })
  };
  Immersion.associate = function (models) {
    Immersion.hasMany(models.Videos, { as: 'Immersion' })
  };
  Immersion.associate = function (models) {
    Immersion.hasMany(models.Information, { as: 'Immersion' })
  };
  return Immersion;
};