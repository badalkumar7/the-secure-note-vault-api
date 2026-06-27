const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const isLoggedIn = require("../middlewares/authMiddleware");
const {apiLimiter} = require("../middlewares/rateLimiter");

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created successfully
 *       401:
 *         description: Unauthorized
 *   get:
 *     summary: Get all notes for the logged-in user
 *     tags: [Notes]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of notes retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/",apiLimiter, isLoggedIn, noteController.createNote);
router.get("/",apiLimiter, isLoggedIn, noteController.getNotes);

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Update a note by ID
 *     tags: [Notes]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The note ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       404:
 *         description: Note not found or unauthorized
 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Notes]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The note ID
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       404:
 *         description: Note not found or unauthorized
 */
router.put("/:id",apiLimiter, isLoggedIn, noteController.updateNote);
router.delete("/:id",apiLimiter, isLoggedIn, noteController.deleteNote);

module.exports = router;
