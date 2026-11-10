
const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");
const nodemailer = require("nodemailer");

const router = express.Router();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Submit a new enquiry (public contact form)
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      destination,
      productCategory,
      enquiryDetails,
    } = req.body;

    if (
      !fullName ||
      !companyName ||
      !email ||
      !phone ||
      !destination ||
      !productCategory ||
      !enquiryDetails
    ) {
      return res.status(400).json({
        message: "Please fill in all enquiry fields.",
      });
    }

    const sql = `
      INSERT INTO enquiries (
        full_name,
        company_name,
        email,
        phone,
        destination,
        product_category,
        enquiry_details
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
      fullName.trim(),
      companyName.trim(),
      email.trim(),
      phone.trim(),
      destination.trim(),
      productCategory,
      enquiryDetails.trim(),
    ]);

    
try {
  await transporter.sendMail({
    from: `"Marshal Do Export Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ENQUIRY_RECEIVER,
    replyTo: email.trim(),
    subject: `New B2B Enquiry - ${productCategory}`,
    text: `
New B2B Enquiry Received

Enquiry ID: ${result.insertId}

Full Name: ${fullName}
Company Name: ${companyName}
Email: ${email}
Phone / WhatsApp: ${phone}
Destination Country: ${destination}
Product Category: ${productCategory}

Enquiry Details:
${enquiryDetails}
    `,
  });
} catch (emailError) {
  console.error("Email notification failed:", emailError);
}

res.status(201).json({
  message: "Your enquiry has been submitted successfully.",
  enquiryId: result.insertId,
});

  } catch (error) {
    console.error("Enquiry submission error:", error);

    res.status(500).json({
      message: "Failed to submit enquiry. Please try again.",
    });
  }
});

// Get all enquiries (admin only)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM enquiries ORDER BY created_at DESC"
    );

    res.json(rows);
  } catch (error) {
    console.error("Fetch enquiries error:", error);

    res.status(500).json({
      message: "Failed to fetch enquiries.",
    });
  }
});

// Update enquiry status (admin only)
router.put("/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const allowedStatuses = ["Pending", "Replied", "Closed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid enquiry status.",
      });
    }

    const [result] = await db.query(
      "UPDATE enquiries SET status = ? WHERE id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Enquiry not found.",
      });
    }

    res.json({
      message: "Enquiry status updated successfully.",
    });
  } catch (error) {
    console.error("Update enquiry status error:", error);

    res.status(500).json({
      message: "Failed to update enquiry status.",
    });
  }
});

// Delete enquiry (admin only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM enquiries WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Enquiry not found.",
      });
    }

    res.json({
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Delete enquiry error:", error);

    res.status(500).json({
      message: "Failed to delete enquiry.",
    });
  }
});

module.exports = router;
