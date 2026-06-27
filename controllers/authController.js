const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const userModel = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).send("Email already registered");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const createUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true });
        
        res.status(201).send(createUser);
    } catch (err) {
        res.status(500).send("Server error during registration");
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).send("Invalid credentials");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials");

        const token = jwt.sign({ email: user.email }, config.jwtSecret, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true });
        
        res.send("Login successful");
    } catch (err) {
        res.status(500).send("Server error during login");
    }
};

exports.logoutUser = (req, res) => {
    res.clearCookie("token");
    res.send("Logged out successfully");
};
