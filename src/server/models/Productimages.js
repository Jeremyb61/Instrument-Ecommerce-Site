'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductImages = sequelize.define('productimages', {
    path: DataTypes.STRING
  }, {});
  ProductImages.associate = function(models) {
    // associations can be defined here

    ProductImages.belongsTo(models.products)
  };
  return ProductImages;
};