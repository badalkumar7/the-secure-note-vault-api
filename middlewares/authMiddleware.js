const jwt = require("jsonwebtoken");
const config = require("../config/config");
const userModel = require("../models/User");

async function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).send("You must be logged in");

        const data = jwt.verify(token, config.jwtSecret);
        
        const user = await userModel.findOne({ email: data.email });
        if (!user) return res.status(401).send("User not found");

        req.user = user; 
        next(); 
    } catch (err) {
        res.status(401).send("Invalid or expired session token");
    }
}

module.exports = isLoggedIn;
