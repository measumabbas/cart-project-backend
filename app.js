const express = require('express')
const errorMiddleware = require("./middlewares/error");
const app = express()

app.use(express.json())

const user = require('./routes/userRoute')
const product = require('./routes/productRoutes')
const cart = require('./routes/cartRoute')
app.use('/api/v1',user)
app.use('/api/v1',product)
app.use('/api/v1',cart)
app.use(errorMiddleware)
module.exports = app