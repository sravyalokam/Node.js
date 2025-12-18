import prisma from "../prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) =>
  jwt.sign({ userId: user.id, email: user.email, role: user.role },
           process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m" });

export const generateRefreshToken = (user) =>
  jwt.sign({ userId: user.id },
           process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d" });

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
    if (!refreshToken) return res.status(401).json({ message: "Refresh token required" });

    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    if (!user || user.refreshToken !== refreshToken)
      return res.status(403).json({ message: "Invalid refresh token" });

    const newAccessToken = generateAccessToken(user);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: "Token expired or invalid" });
  }
};

export const logoutAccount = async (req, res) => {
  await prisma.user.update({ where: { id: req.user.userId }, data: { refreshToken: null } });
  res.json({ message: "Logged out successfully" });
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
