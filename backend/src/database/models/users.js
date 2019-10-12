'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    company: DataTypes.STRING,
    immersionId: DataTypes.INTEGER
  }, {});
  Users.associate = function (models) {
    Users.belongsTo(models.Immersion, { foreignKey: 'immersionId', as: 'immersion' })
  };
  return Users;
};