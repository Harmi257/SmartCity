const jwt = require("jsonwebtoken");
const SECRET_KEY =process.env.JWT_SECRET_KEY;


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(403).json({ message: "Token required" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const isOfficial = (req, res, next) => {
  if (req.role !== "official") return res.status(403).json({ message: "Access denied" });
  next();
};

module.exports = { verifyToken, isOfficial };
