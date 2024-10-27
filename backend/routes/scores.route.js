express = require('express');
ScoresController = require('../controllers/scores.controller');

const router = express.Router();

router.get('/', ScoresController.getScores);
router.get('/users/:userId',ScoresController.getScoresByUser);
router.get('/matchs/:matchId',ScoresController.getScoresByMatch);
router.post('/',ScoresController.createScore);

module.exports = router;