const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB=async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)
        process.exit(1) // Exit process with failure code 1
    }
}


module.exports = connectDB;