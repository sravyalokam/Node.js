module.exports = function auth(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  if (token !== "12345") {
    return res.status(403).json({ message: "Invalid token" });
  }

  req.user = { id: 1, name: "Sravya" }; // attach data to req

  next();
};
