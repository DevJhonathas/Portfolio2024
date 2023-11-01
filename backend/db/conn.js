const mongoose = require("mongoose")

const main = async () => { 
    try {
        await (await mongoose.connect(process.env.CONN_MONGODB));
    } catch (error) {
        console.log(error);
    }   
}

module.exports = main