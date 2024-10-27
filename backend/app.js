const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./models/index');
UsersRoute = require('./routes/users.route');
MatchsRoute = require('./routes/matchs.route');
ScoresRoute = require('./routes/scores.route');
Migration = require('./config/migration');

require('dotenv').config()

sequelize.sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => console.error("Error synchronizing database:", error));

// Middleware pour analyser le JSON
app.use(express.json());

// Routes API
app.use('/users', UsersRoute);
app.use('/matchs', MatchsRoute);
app.use('/scores', ScoresRoute);

// Migrations
Migration.ensureDefaultMatchType().then(() => {
  console.log("Default Match Type added!")
}).catch((error) => {
  console.error("Can't insert values")
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});