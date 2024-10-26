const express = require('express');
UsersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/', UsersController.getUsers);

module.exports = router;