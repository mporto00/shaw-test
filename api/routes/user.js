const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

router.get('/:number', userController.getAllUsers);
router.get('/:username/details', userController.getUserDetails);
router.get('/:username/repos', userController.getUserRepositories);

module.exports = router;
