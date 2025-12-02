const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserOrders,
  uploadAvatar
} = require("../controllers/userController");

const upload = multer({ dest: "uploads/" });

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/:id/orders", getUserOrders);
router.post("/", createUser);
router.post("/:id/upload", upload.single("avatar"), uploadAvatar);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
