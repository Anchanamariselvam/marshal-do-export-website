const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Generate slug from category name
function generateSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// GET all categories
router.get("/", async (req, res) => {
  try {
    const [categories] = await db.query(
      "SELECT *, image_url AS image FROM categories ORDER BY id DESC"
    );

    res.json(categories);
  } catch (error) {
    console.error("Fetch categories error:", error.message);

    res.status(500).json({
      message: "Failed to fetch categories.",
    });
  }
});

// ADD category - check duplicate first
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Category name is required.",
      });
    }

    const trimmedName = name.trim();
    const slug = generateSlug(trimmedName);

    // Check whether category already exists
    const [existingCategory] = await db.query(
      `SELECT id, name
       FROM categories
       WHERE LOWER(TRIM(name)) = LOWER(TRIM(?))
       LIMIT 1`,
      [trimmedName]
    );

    if (existingCategory.length > 0) {
      return res.status(409).json({
        exists: true,
        id: existingCategory[0].id,
        message: `Category "${existingCategory[0].name}" already exists. You can edit or delete it.`,
      });
    }

    // Insert only if category is new
    const [result] = await db.query(
      `INSERT INTO categories
       (name, slug, description, image_url)
       VALUES (?, ?, ?, ?)`,
      [
        trimmedName,
        slug,
        description || "",
        image || "",
      ]
    );

    res.status(201).json({
      exists: false,
      message: "Category added successfully!",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Add category error:", error.message);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        exists: true,
        message: "This category already exists. Please edit the existing category.",
      });
    }

    res.status(500).json({
      message: "Failed to add category.",
    });
  }
});

// UPDATE category - check duplicate excluding current category
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const { id } = req.params;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Category name is required.",
      });
    }

    const trimmedName = name.trim();
    const slug = generateSlug(trimmedName);

    // Check whether another category already has this name
    const [existingCategory] = await db.query(
      `SELECT id, name
       FROM categories
       WHERE LOWER(TRIM(name)) = LOWER(TRIM(?))
       AND id != ?
       LIMIT 1`,
      [trimmedName, id]
    );

    if (existingCategory.length > 0) {
      return res.status(409).json({
        exists: true,
        id: existingCategory[0].id,
        message: `Category "${existingCategory[0].name}" already exists. Please use a different name.`,
      });
    }

    const [result] = await db.query(
      `UPDATE categories
       SET name = ?, slug = ?, description = ?, image_url = ?
       WHERE id = ?`,
      [
        trimmedName,
        slug,
        description || "",
        image || "",
        id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Category not found.",
      });
    }

    res.json({
      message: "Category updated successfully!",
    });
  } catch (error) {
    console.error("Update category error:", error.message);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        exists: true,
        message: "This category already exists.",
      });
    }

    res.status(500).json({
      message: "Failed to update category.",
    });
  }
});

// DELETE category
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM categories WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Category not found.",
      });
    }

    res.json({
      message: "Category deleted successfully!",
    });
  } catch (error) {
    console.error("Delete category error:", error.message);

    // Category may have products linked to it
    if (error.code === "ER_ROW_IS_REFERENCED_2") {
      return res.status(409).json({
        message: "This category has products linked to it. Delete or move those products before deleting the category.",
      });
    }

    res.status(500).json({
      message: "Failed to delete category.",
    });
  }
});

module.exports = router;
