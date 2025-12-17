import prisma from "../prismaClient.js";
import jwt from "jsonwebtoken";

export const microsoftCallback = async (req, res) => {
  const user = req.user;

  const accessToken = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });

  res.json({
    message: "Microsoft login successful",
    accessToken,
    refreshToken,
  });
};
