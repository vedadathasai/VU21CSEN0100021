const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Route to fetch products
router.get('/categories/:categoryname/products', productsController.fetchProducts);

module.exports = router;
