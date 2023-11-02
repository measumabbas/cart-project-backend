const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter title'],
    },
    image:{
        type:String,
        required:[true,'please enter image url']
    },
    description:{
        type:String,
        required:[true,'please enter product description']
    },
    price:{
        type:Number,
        required:[true,'please enter product price']
    }
})

module.exports = mongoose.model('Product',productModel)