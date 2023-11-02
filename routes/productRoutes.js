const express = require('express')
const { createProduct, updateProduct } = require('../controllers/productController')


const router = express.Router()

router.route('/product/new').post(createProduct)
router.route('/product/update/:id').put(updateProduct)
module.exports = router