import jwt from "jsonwebtoken";
import userDB from "../userClient.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../middleware/asyncHandler.js";


export const generateAccessToken = (user) => {
  if (!process.env.JWT_ACCESS_SECRET) {
    throw new Error("JWT_ACCESS_SECRET not configured");
  }

  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role,
      tokenVersion: user.tokenVersion,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "30m" }
  );
};


export const generateRefreshToken = (user) => {
  if (!process.env.JWT_REFRESH_SECRET) {
    throw new Error("JWT_REFRESH_SECRET not configured");
  }

  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role,
      tokenVersion: user.tokenVersion,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d" }
  );
};


/* REGISTER */
export const registerAccount = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const existingUser = await userDB.user.findUnique({ where: { email } });
  if (existingUser) {
    const error = new Error("User already exists");
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userDB.user.create({
    data: {
      email,
      password: hashedPassword,
      role: role || "user",
    },
  });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

  await userDB.user.update({
    where: { id: user.id },
    data: { refreshToken: hashedRefreshToken },
  });

  res.status(201).json({
    message: "User registered successfully",
    accessToken,
  });
});


/* LOGIN */
export const loginAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userDB.user.findUnique({ where: { email } });
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const error = new Error("Invalid password");
    error.statusCode = 401;
    throw error;
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
  await userDB.user.update({
    where: { id: user.id },
    data: { refreshToken: hashedRefreshToken },
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Login successful",
    accessToken,
  });
});
