const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Match = sequelize.define('Match', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  beganAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  endedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  typeMatchId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'typesMatch',
      key: 'id'
    }
  }
}, {
  tableName: 'matchs',
  timestamps: false,
  validate: {
    endedAfterBegan() {
      if (this.endedAt !== null && this.endedAt <= this.beganAt) {
        throw new Error('endedAt doit être postérieur à beganAt.');
      }
    }
  }
});

Match.sync();

module.exports = Match;