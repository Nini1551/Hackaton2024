const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const TypeMatch = sequelize.define('TypeMatch', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  maxDuration: { // In seconds
    type: DataTypes.INTEGER,
    allowNull: true
  },
  maxPoints: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'typesMatch',
  timestamps: false,
  validate: {
    notBothNull() {
      if (this.dureeMax === null && this.pointsMax === null) {
        throw new Error('maxPoints and maxDuration cannot be both null');
      }
    },
    async uniqueDureePoints() {
      if (this.dureeMax !== null || this.pointsMax !== null) {
        const match = await TypeMatch.findOne({
          where: {
            dureeMax: this.dureeMax,
            pointsMax: this.pointsMax,
          },
        });
        if (match) {
          throw new Error('There is already a match with the same duration and points');
        }
      }
    }
  }
});

TypeMatch.sync();

module.exports = TypeMatch;