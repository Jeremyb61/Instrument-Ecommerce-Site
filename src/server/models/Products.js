'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    Products.belongsTo(models.Departments);
  };
  return Products;
};