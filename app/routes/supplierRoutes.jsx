const express = require('express');
const router = express.Router();
const supplierController = require('../Controller/SupplierController');

router.get('/', supplierController.getAllSuppliers);
router.post('/post', supplierController.createSupplier);
router.put('/update/:id', supplierController.updateSupplier);
router.delete('/delete/:id', supplierController.deleteSupplier);

module.exports = router;
