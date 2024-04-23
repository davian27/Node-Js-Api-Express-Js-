const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');


router.get('/', productController.getAllProducts);


router.get('/:id', productController.getProductById);


router.post('/post', productController.createProduct);


router.put('/update/:id', productController.updateProduct);


router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
