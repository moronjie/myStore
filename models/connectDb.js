const mongoose = require('mongoose')

const connectDb = async (url)=>{
    try {
        await mongoose.connect(url),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports =connectDb