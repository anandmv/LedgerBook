const express = require('express');
const router = express.Router();
const accountController = require('./controller');

router.post('/', accountController.addAccount);
router.get('/', accountController.findAccounts);
router.get('/:id', accountController.findAccountById);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteById);

module.exports = router;