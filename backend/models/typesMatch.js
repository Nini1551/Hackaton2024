const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const TypeMatch = sequelize.define('TypeMatch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type : {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  maxPoints : {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  maxDuration : {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  createdAt : {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'typesMatch',
  timestamps: false,
});

TypeMatch.sync({ alter: true });

module.exports = TypeMatch;