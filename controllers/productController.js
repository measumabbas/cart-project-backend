
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Product = require('../models/productModel')
exports.createProduct = catchAsyncErrors(async(req,res)=>{
    const product = await Product.create(req.body)
    res.status(200).json({
        success:true,
        product
    })
})

exports.updateProduct = catchAsyncErrors(async (req,res)=>{
    const id = req.params.id
    const updateProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({
        success:true,
        product:updateProduct
    })
    
})