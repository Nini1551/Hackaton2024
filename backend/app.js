const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./models/index');
UsersRoute = require('./routes/users.route');
MatchsRoute = require('./routes/matchs.route');
ScoresRoute = require('./routes/scores.route');

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

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});