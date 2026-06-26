const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("./config/config");
const connectDB = require("./config/db");
const userModel = require("./models/User");
const jwt = require("jsonwebtoken");
const bcryt = require("bcrypt");
const notesRoutes = require("./routes/authRoutes");


connectDB();


app.get("/",(req,res)=>{
    res.send("working");
});

app.use("/api/notes",notesRoutes);



app.listen(config.port,(req,res)=>{
    console.log(`Server running on port ${config.port}`);
})