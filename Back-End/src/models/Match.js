const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('match', {
      name: {
        type: DataTypes.DATE,
        allowNull: false
      },
    }, {
      timestamps: false
    });
  };