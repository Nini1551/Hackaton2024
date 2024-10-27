const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const TypeMatch = require("./typesMatch");

const Match = sequelize.define('Match', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  startedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  endedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  typeId: {
    type: DataTypes.INTEGER,
    references: {
      model: TypeMatch,
      key: 'id',
    },
  },
});

Match.sync({ alter: true });

module.exports = Match;