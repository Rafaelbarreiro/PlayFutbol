const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('golas', {
    name: {
      type: DataTypes.integer,
      allowNull: false
    },
  }, {
    timestamps: false
  });
};