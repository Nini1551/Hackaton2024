express = require('express');
UsersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.getUserById);
router.post('/', UsersController.createUser);

module.exports = router;