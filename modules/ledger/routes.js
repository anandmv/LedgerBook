const express = require('express');
const router = express.Router();
const ledgerController = require('./controller');

router.post('/', ledgerController.addRecord);
router.get('/', ledgerController.findRecords);
router.get('/:id', ledgerController.findRecordById);
router.put('/:id', ledgerController.updateRecord);
router.delete('/:id', ledgerController.deleteById);

module.exports = router;