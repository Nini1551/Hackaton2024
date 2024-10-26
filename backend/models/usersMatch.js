const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const UserMatch = sequelize.define('UserMatch', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  matchId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'matchs',
      key: 'id'
    }
  }
}, {
  tableName: 'usersMatch',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['userId', 'matchId']
    }
  ],
  validate: {
    async scoreWithinMaxPoints() {
      // Récupérer le match associé avec le type de match et son PointMax
      const match = await sequelize.models.Match.findOne({
        where: { id: this.MatchId },
        include: [{
          model: sequelize.models.TypeMatch,
          attributes: ['maxPoints']
        }]
      });

      if (!match) {
        throw new Error("Le match associé n'existe pas.");
      }

      const maxPoints = match.TypeMatch.maxPoints;

      if (maxPoints !== null && this.score > maxPoints) {
        throw new Error(`Le score ne peut pas être supérieur au maximum de points (${maxPoints}) pour ce type de match.`);
      }
    }
  }
});

UserMatch.sync();

module.exports = UserMatch;