const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    }
    catch (error) {
        console.log("Databse Error : ", error)
    }
}

mongoose.set('strictQuery', false)

module.exports = connectDB