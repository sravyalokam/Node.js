import express from "express";
import axios from "axios";

const router = express.Router();

// Step 1: Redirect user to Google login
router.get("/", (req, res) => {
  const clientID = process.env.GOOGLE_CLIENT_ID;
  const redirectURI = process.env.GOOGLE_REDIRECT_URI;
  const scope = encodeURIComponent(
  "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
);


 const oauthURL =
  `https://accounts.google.com/o/oauth2/v2/auth` +
  `?response_type=code` +
  `&client_id=${clientID}` +
  `&redirect_uri=${encodeURIComponent(redirectURI)}` +
  `&scope=${scope}` +
  `&access_type=offline` +
  `&prompt=consent`;

  res.redirect(oauthURL);
});

// Step 2: Handle Google callback
router.get("/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("No code provided");

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post("https://oauth2.googleapis.com/token", null, {
      params: {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // Get user info
    const userResponse = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const user = userResponse.data;
    // TODO: Create session or generate JWT
    res.json({ message: "Google login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during Google authentication");
  }
});

export default router;
