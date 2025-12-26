import { authenticate } from "../middleware/auth.middleware.js";
import { registerAccount } from "../controllers/login.controller.js";
import express from "express";

const router = express.Router();

router.post("/register", registerAccount);

// Example protected route
router.get("/me", authenticate, (req, res) => {
  res.json({
    message: "Authenticated user",
    user: req.user
  });
});

export default router;