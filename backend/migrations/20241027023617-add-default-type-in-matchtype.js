'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Vérifier si la ligne par défaut existe
    const [results] = await queryInterface.sequelize.query(
      `SELECT * FROM "MatchTypes" WHERE type = 'default' LIMIT 1;`
    );

    // Si la ligne par défaut n'existe pas, l'insérer
    if (results.length === 0) {
      await queryInterface.bulkInsert('MatchTypes', [{
        type: 'default',
        maxPoints: 3
      }]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Supprimer la ligne par défaut si nécessaire
    await queryInterface.bulkDelete('MatchTypes', { type: 'default' });
  }
};
