import express from "express";
import multer from "multer";
import path from "path";

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getCustomerCount,
  countCustomersByEmail,
  uploadCustomerDoc
} from "../controllers/customer.controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware.js";

const router = express.Router();
router.use(authenticate);
// router.get("/count", getCustomerCount);
// router.get("/count-by-mail", countCustomersByEmail);
// router.post("/", createCustomer);
// router.get("/", getAllCustomers);
// router.get("/:id", getCustomerById);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // folder to save uploaded files
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only PDF or image files are allowed"));
    }
    cb(null, true);
  },
});
// ------------------------------------------------------

// ---------------- Existing Routes -------------------
router.get("/count", getCustomerCount);
router.get("/count-by-mail", countCustomersByEmail);
router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
// ----------------------------------------------------

// --------------- File Upload Route -------------------
router.post("/upload-doc", upload.single("doc"), uploadCustomerDoc);
// ----------------------------------------------------


export default router;

