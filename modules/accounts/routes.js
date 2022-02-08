const express = require('express');
const router = express.Router();
const accountController = require('./controller');
const authenticateRoute = require('../../helper/authenticateRoute');
const {rbac, UserRoles} = require('../../helper/rbac');

router.post('/', authenticateRoute, rbac(UserRoles.Admin), accountController.addAccount);
router.get('/', authenticateRoute, accountController.findAccounts);
router.get('/:id', authenticateRoute, accountController.findAccountById);
router.put('/:id', authenticateRoute, rbac(UserRoles.Admin), accountController.updateAccount);
router.delete('/:id', authenticateRoute, rbac(UserRoles.Admin), accountController.deleteById);

module.exports = router;