import jwt from "jsonwebtoken";
import prisma from "../userClient.js";

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    //  Verify JWT signature & expiry
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    // Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    // TOKEN VERSION CHECK
    if (payload.tokenVersion !== user.tokenVersion) {
      return res.status(401).json({ message: "Token revoked" });
    }

    // Attach safe data to request
    req.user = {
      userId: user.id,
      role: user.role,
      email: user.email,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "Access denied" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient permissions" });
    }

    next();
  };
};
