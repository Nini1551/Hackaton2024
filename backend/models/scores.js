const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./users");
const Match = require("./matchs");

const Score = sequelize.define('User', {
  userId:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id',
    },
  },
  matchId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Match,
      key: 'id',
    },
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    valide: {
      min: 0,
    },
  },
}, {
  tableName: 'scores',
  timestamps: false,
});

Score.sync({ alter: true });

module.exports = Score;