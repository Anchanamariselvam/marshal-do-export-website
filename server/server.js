
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Backend test
app.get("/", (req, res) => {
  res.json({
    message: "Marshal Do Export backend server is running!"
  });
});

// Database health check
app.get("/api/health", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS connection_test");

    res.json({
      server: "Connected",
      database: "Connected",
      result: rows
    });
  } catch (error) {
    res.status(500).json({
      server: "Connected",
      database: "Failed",
      error: error.message
    });
  }
});

// Admin authentication routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/enquiries", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
