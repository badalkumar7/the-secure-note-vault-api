const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const {authLimiter} = require("../middlewares/rateLimiter");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already registered or invalid body
 */
router.post("/register",authLimiter, authController.registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful and sets cookie
 *       400:
 *         description: Invalid credentials
 *       429:
 *         description: Too many requests - IP temporarily blocked
 */
router.post("/login",authLimiter, authController.loginUser);

/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Log out current user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Logged out successfully and clears cookie
 */
router.get("/logout",authLimiter, authController.logoutUser);

module.exports = router;
