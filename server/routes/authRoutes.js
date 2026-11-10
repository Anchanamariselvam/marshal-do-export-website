
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required."
      });
    }

    const [users] = await db.query(
      `SELECT id, username, email, password_hash, role
       FROM admin_users
       WHERE (username = ? OR email = ?)
       AND is_active = TRUE
       LIMIT 1`,
      [username, username]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid username or password."
      });
    }

    const admin = users[0];

    const isPasswordValid = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid username or password."
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
        role: admin.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    res.json({
      message: "Login successful!",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    console.error("Admin login error:", error.message);

    res.status(500).json({
      message: "Internal server error."
    });
  }
});

module.exports = router;
