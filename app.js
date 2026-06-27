const express = require("express");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express"); // Added
const swaggerJsdoc = require("swagger-jsdoc"); // Added

const config = require("./config/config");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Secure Note Vault API",
            version: "1.0.0",
            description: "A secure API for managing personal notes with JWT authentication",
        },
        servers: [
            {
                url: `http://localhost:${config.port}`,
                description: "Local development server",
            },
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: "apiKey",
                    in: "cookie",
                    name: "token",
                    description: "JWT session token stored in cookies",
                },
            },
        },
    },
    
    apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (req, res) => {
    res.send("Secure Note Vault API is running. Visit /api-docs for documentation.");
});


app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
