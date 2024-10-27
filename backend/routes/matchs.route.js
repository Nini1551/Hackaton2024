express = require('express');
MatchsController = require('../controllers/matchs.controller');

const router = express.Router();

router.get('/', MatchsController.getMatchs);
router.get('match/:id', MatchsController.getMatchById);
router.get('/types/:id', MatchsController.getMatchsByType);
router.post('/', MatchsController.createMatch);

router.get('/types', MatchsController.getTypesMatch);
router.get('/type/:id', MatchsController.getTypeMatchById);
router.post('/types', MatchsController.createTypeMatch);


module.exports = router;