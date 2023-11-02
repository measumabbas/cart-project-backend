
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const User = require('../models/userModel')
const ErrorHandler = require('../utills/errorhander')
exports.createUser =  catchAsyncErrors(async(req,res,next)=>{

    const exists = await User.findOne({email:req.body.email})
    if(exists){
        return next(new ErrorHandler('User with this email already exists',409))
    }
    const user = await User.create(req.body)
    res.status(200).json({
        success:true,
        user
    })
})