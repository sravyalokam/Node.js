import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";
import {
  generateAccessToken,
  generateRefreshToken
} from "../controllers/auth.controller.js";


const router = express.Router();


router.get(
  "/",
  passport.authenticate("microsoft", {
    session: false,
    prompt: "select_account",
  })
);


router.get(
  "/callback",
  passport.authenticate("microsoft", {
    session: false,
    failureRedirect: "/login",
  }),
  async (req, res) => {
    const user = req.user;

    const accessToken = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    res.json({
      message: "Microsoft login successful",
      accessToken,
      refreshToken,
    });
  }
);

export default router;
