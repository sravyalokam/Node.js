import express from "express";
import { loginAccount, registerAccount, getUserProfile } from "../controllers/auth.controller.js";
import { validateBody, registerSchema, validateParams, userIdParamSchema, loginSchema } from "../middleware/validations.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route
router.post("/login", validateBody(loginSchema), loginAccount);
router.post("/register", validateBody(registerSchema), registerAccount);

// Protected route
router.get("/profile/:id", authenticate, validateParams(userIdParamSchema), getUserProfile);

export default router;
