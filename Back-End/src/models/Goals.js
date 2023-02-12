const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('goals', {
    name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: false
  });
};