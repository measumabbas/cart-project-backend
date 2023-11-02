const express = require('express')
const { createCart, addToCart, getCartProducts } = require('../controllers/cartController')


const router = express.Router()

router.route('/cart/new').post(createCart)
router.route('/cart/add').post(addToCart)
router.route('/cart/get').post(getCartProducts)
module.exports = router