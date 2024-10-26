const express = require('express');
MatchsController = require('../controllers/matchs.controller');

const router = express.Router();

router.get('/', MatchsController.getMatchs);

router.get('/types', MatchsController.getTypesMatch);

router.get('scores/:id', MatchsController.getScoresMatch);

router.get('users/:id', MatchsController.getUsersMatch);

module.exports = router;