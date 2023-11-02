const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Cart = require('../models/cartModel')
const ErrorHandler = require('../utills/errorhander')
exports.createCart = catchAsyncErrors(async (req,res)=>{
    const cart = await Cart.create(req.body);

    res.status(200).json({
        success:true,
        cart
    })
})

exports.addToCart = catchAsyncErrors(async (req,res,next)=>{
    const userCart = await Cart.findOne({user:req.body.user})
    if(!userCart){
        return next(new ErrorHandler('No cart found for this user',404))
    }
    userCart.products.push({product: req.body.product});

    await userCart.save();
    res.status(200).json({
        success:true,
        cart: userCart
    })
})


exports.getCartProducts = catchAsyncErrors(async (req, res, next) => {
    const userId = req.body.user;
    
    const userCart = await Cart.findOne({ user: userId })
      .populate({
        path: 'products.product',
        select: 'name price description price'
      })
      .exec();
  
    if (!userCart) {
      return next(new ErrorHandler('No cart found for this user', 404));
    }
    const sortedProducts = userCart.products.sort((a, b) => b.createdAt - a.createdAt);
  
    res.status(200).json({
      success: true,
      products: sortedProducts
    });
  });