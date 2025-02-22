const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { signup, login } = require("../controllers/authController");
require("dotenv").config();
const router = express.Router();


// POST route for signing up
router.post("/signup", signup);

// Optional: GET route for /signup (e.g., to render a signup form)


// Sample Routes


router.post("/login", login);



module.exports = router;