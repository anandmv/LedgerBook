const express = require('express');
const router = express.Router();
const userController = require('./controller');
const authenticateRoute = require('../../helper/authenticateRoute');

router.post('/', authenticateRoute, userController.addUser);
router.get('/', authenticateRoute, userController.findUsers);
router.get('/:id', authenticateRoute, userController.findUserById);
router.put('/:id', authenticateRoute, userController.updateUser);
router.delete('/:id', authenticateRoute, userController.deleteById);

module.exports = router;