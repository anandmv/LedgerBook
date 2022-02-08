const express = require('express');
const router = express.Router();
const ledgerController = require('./controller');
const authenticateRoute = require('../../helper/authenticateRoute');
const {rbac, UserRoles} = require('../../helper/rbac');

router.post('/', authenticateRoute, ledgerController.addRecord);
router.get('/', authenticateRoute, ledgerController.findRecords);
router.get('/:id', authenticateRoute, ledgerController.findRecordById);
router.put('/:id', authenticateRoute, ledgerController.updateRecord);
router.delete('/:id', authenticateRoute, rbac(UserRoles.Admin), ledgerController.deleteById);

module.exports = router;