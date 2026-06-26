const mongoose = require("mongoose");
const config = require("./config");


const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;