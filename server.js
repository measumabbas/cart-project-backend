const app = require('./app')
const dotenv = require('dotenv')
const connectToDb = require('./utills/db')

dotenv.config({path:'./config/config.env'})


app.listen(process.env.PORT,()=>{
    console.log(`App listening to port ${process.env.PORT}`)
})
connectToDb()