'use strict';
module.exports = (sequelize, DataTypes) => {

  const Products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});

  Products.associate = (models) => {
    Products.belongsTo(models.departments);

    Products.hasMany(models.productimages);
  };

  return Products;
};