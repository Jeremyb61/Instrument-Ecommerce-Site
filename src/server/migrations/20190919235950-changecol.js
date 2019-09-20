'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.changeColumn(
      'products',
      'price',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
    // Example:
    // return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
