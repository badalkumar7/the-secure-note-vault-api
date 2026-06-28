require("dotenv").config();

module.exports = {
    mongoUri:process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/noteVault',
    jwtSecret:process.env.JWT_SECRET,
    port:process.env.PORT || 8000
};