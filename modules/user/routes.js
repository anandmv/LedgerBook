const express = require('express');
const router = express.Router();
const userController = require('./controller');
const authenticateRoute = require('../../helper/authenticateRoute');
const {rbac, UserRoles} = require('../../helper/rbac');

router.post('/', authenticateRoute, userController.addUser);
router.get('/', authenticateRoute, userController.findUsers);
router.get('/:id', authenticateRoute, userController.findUserById);
router.put('/:id', authenticateRoute, userController.updateUser);
router.delete('/:id', authenticateRoute, rbac(UserRoles.Admin), userController.deleteById);

module.exports = router;