'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('Departments', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Departments.associate = function(models) {
    Departments.hasMany(models.products);
  };
  return Departments;
};