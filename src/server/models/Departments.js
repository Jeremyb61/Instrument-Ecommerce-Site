'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('departments', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Departments.associate = function(models) {
    Departments.hasMany(models.products);
  };
  return Departments;
};