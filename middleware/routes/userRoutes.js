const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validateUser = require("../middleware/validate");
const auth = require("../middleware/auth");

// Define routes

// GET /users
router.get("/", userController.getUsers);

// POST /users
router.post("/", validateUser, userController.createUser);

// GET /users/profile
router.get("/profile", auth, userController.getProfile);

module.exports = router;
