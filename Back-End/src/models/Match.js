const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('match', {
      name: {
        type: DataTypes.DATE,
        allowNull: false
      },
      goalCreator: {
        type: DataTypes.INTEGER,
        default: 0
      },
      goalRival: {
        type: DataTypes.INTEGER,
        default: 0
      }
    }, {
      timestamps: true
    });
  };