'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Users , {foreignKey : 'id'});
    }
  }
  Orders.init({
    productId: DataTypes.DECIMAL,
    userId: DataTypes.DECIMAL,
    totalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};