const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required'],
        validate:[validator.isEmail,'Please enter a valid email'],
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
})

module.exports = mongoose.model('User',userSchema)