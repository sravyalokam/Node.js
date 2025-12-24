import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";

const app = express();

// Determine environment
const ENV = process.env.NODE_ENV || "development"; 

const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:5500"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); 
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET","POST","PATCH","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser()); 
app.use(passport.initialize());

// Load correct env file
dotenv.config({
  path: `.env.${ENV}`
});

// const csrfProtection = csrf({
//   cookie: true              
// });

// Read env variables
console.log("Environment:", process.env.NODE_ENV);
// console.log("Database:", process.env.DB_NAME);
// console.log("Secret:", process.env.SECRET);

import passport from "passport";
import "./config/passport.microsoft.js";
import express from "express";
import authRoutes from "./routes/login.routes.js";
import microsoftAuthRoutes from "./routes/microsoft_login.routes.js";

// Mount your routes

// app.get("/app/csrf-token", csrfProtection, (req, res) => {
//   res.json({ csrfToken: req.csrfToken() });
// });

// app.use("/app", csrfProtection, authRoutes);

app.use("/app", authRoutes);

app.use("/app/auth/microsoft", microsoftAuthRoutes);

if (ENV === "production") {
  import("./routes/google_login.routes.js").then((googleRoutes) => {
    app.use("/app/auth/google", googleRoutes.default);
    console.log("Google Auth enabled in production.");
  });
} else {
  console.log("Google Auth is disabled in non-production environment.");
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;