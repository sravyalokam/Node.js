import prisma from "../prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) =>
  jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role,
      tokenVersion: user.tokenVersion,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m" }
  );

export const generateRefreshToken = (user) =>
  jwt.sign(
    {
      userId: user.id,
      tokenVersion: user.tokenVersion,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d" }
  );


export const registerAccount = async (req, res) => {
  try {
    const { email, password, role } = req.body; // include role

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Pass role to Prisma; default to "user" if missing
    const user = await prisma.user.create({
      data: { 
        email, 
        password: hashedPassword,
        role: role || "user"
      },
    });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });

    res.status(201).json({ message: "User registered successfully", accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};

export const loginAccount = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid password" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });

    res.json({ message: "Login successful", accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};

export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(401).json({ message: "Refresh token required" });

    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (
      !user ||
      user.refreshToken !== refreshToken ||
      payload.tokenVersion !== user.tokenVersion
    ) {
      return res.status(403).json({ message: "Refresh token revoked" });
    }

    const newAccessToken = generateAccessToken(user);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: "Token expired or invalid" });
  }
};


export const logoutAccount = async (req, res) => {
  try {
    const userId = req.user?.userId;
    if (!userId)
      return res.status(401).json({ message: "Unauthorized" });

    await prisma.user.update({
      where: { id: userId },
      data: {
        refreshToken: null,
        tokenVersion: { increment: 1 }, // invalidate all JWTs
      },
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Logout failed" });
  }
};


export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.userId;

    await prisma.user.delete({
      where: { id: userId },
    });

    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete failed" });
  }
};


export const getUserProfile = async (req, res) => {
  try {
    const requestedUserId = Number(req.params.id);
    const loggedInUserId = req.user.userId;
    const role = req.user.role;

    if (!requestedUserId) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    if (role !== "admin" && requestedUserId !== loggedInUserId) {
      return res.status(403).json({ message: "Access denied" });
    }

    const user = await prisma.user.findUnique({
      where: { id: requestedUserId },
      select: {
        id: true,
        email: true,
        createdAt: true,
        role: true
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
