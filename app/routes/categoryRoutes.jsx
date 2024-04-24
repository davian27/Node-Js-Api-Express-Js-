const express = require('express');
const router = express.Router();
const categoryController = require('../Controller/categoryController');


router.get('/', categoryController.getAllCategories);


router.get('/:id', categoryController.getCategoryById);


router.post('/post', categoryController.createCategory);


router.put('/update/:id', categoryController.updateCategory);


router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;
