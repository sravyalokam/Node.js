import express from "express";
import { loginAccount, registerAccount, getUserProfile, logoutAccount, deleteAccount, changePassword } from "../controllers/auth.controller.js";
import { validateBody, registerSchema, validateParams, userIdParamSchema, loginSchema } from "../middleware/validations.middleware.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route
router.post("/login", validateBody(loginSchema), loginAccount);
router.post("/register", validateBody(registerSchema), registerAccount);

// Protected route
router.get(
  "/profile/:id",
  authenticate,                 
  authorizeRoles("user", "admin"), 
  validateParams(userIdParamSchema),
  getUserProfile                
);
router.delete("/delete", authenticate, deleteAccount);
router.patch("/change-password", authenticate, validateBody(), changePassword);
router.get("/logout", authenticate, logoutAccount);


export default router;
