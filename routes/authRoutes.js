const express = require("express");

const router = express.Router();
const {getAllNotes} = require("../controllers/authController");

router.route("/").get(getAllNotes);


module.exports = router;