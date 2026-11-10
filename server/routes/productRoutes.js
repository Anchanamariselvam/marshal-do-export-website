const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Generate a unique slug
async function generateSlug(name, excludeId = null) {
  const baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    let query = "SELECT id FROM products WHERE slug = ?";
    let params = [slug];

    if (excludeId) {
      query += " AND id != ?";
      params.push(excludeId);
    }

    const [rows] = await db.query(query, params);

    if (rows.length === 0) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

// GET: Fetch all products
router.get("/", async (req, res) => {
  try {
    const [products] = await db.query(`
      SELECT
        p.*,
        p.image_url AS image,
        c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      ORDER BY p.id DESC
    `);

    res.json(products);
  } catch (error) {
    console.error("Fetch products error:", error.message);

    res.status(500).json({
      message: "Failed to fetch products."
    });
  }
});

// POST: Add a new product - duplicate check
router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      name,
      description,
      category_id,
      image
    } = req.body;

    if (!name || !name.trim() || !category_id) {
      return res.status(400).json({
        message: "Product name and category are required."
      });
    }

    const trimmedName = name.trim();

    // Check whether product already exists
    const [existingProduct] = await db.query(
      `SELECT id, name
       FROM products
       WHERE LOWER(TRIM(name)) = LOWER(TRIM(?))
       LIMIT 1`,
      [trimmedName]
    );

    if (existingProduct.length > 0) {
      return res.status(409).json({
        exists: true,
        id: existingProduct[0].id,
        message: `Product "${existingProduct[0].name}" already exists. You can edit or delete it.`
      });
    }

    const slug = await generateSlug(trimmedName);

    const [result] = await db.query(
      `INSERT INTO products
       (name, slug, description, category_id, image_url)
       VALUES (?, ?, ?, ?, ?)`,
      [
        trimmedName,
        slug,
        description || "",
        category_id,
        image || ""
      ]
    );

    res.status(201).json({
      exists: false,
      message: "Product added successfully!",
      id: result.insertId
    });
  } catch (error) {
    console.error("Add product error:", error.message);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        exists: true,
        message: "This product already exists. Please edit the existing product."
      });
    }

    res.status(500).json({
      message: "Failed to add product."
    });
  }
});

// PUT: Update a product - duplicate check
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const {
      name,
      description,
      category_id,
      image
    } = req.body;

    const { id } = req.params;

    if (!name || !name.trim() || !category_id) {
      return res.status(400).json({
        message: "Product name and category are required."
      });
    }

    const trimmedName = name.trim();

    // Check whether another product has the same name
    const [existingProduct] = await db.query(
      `SELECT id, name
       FROM products
       WHERE LOWER(TRIM(name)) = LOWER(TRIM(?))
       AND id != ?
       LIMIT 1`,
      [trimmedName, id]
    );

    if (existingProduct.length > 0) {
      return res.status(409).json({
        exists: true,
        id: existingProduct[0].id,
        message: `Product "${existingProduct[0].name}" already exists. Please use a different name.`
      });
    }

    const slug = await generateSlug(trimmedName, id);

    const [result] = await db.query(
      `UPDATE products
       SET name = ?, slug = ?, description = ?,
           category_id = ?, image_url = ?
       WHERE id = ?`,
      [
        trimmedName,
        slug,
        description || "",
        category_id,
        image || "",
        id
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Product not found."
      });
    }

    res.json({
      message: "Product updated successfully!"
    });
  } catch (error) {
    console.error("Update product error:", error.message);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        exists: true,
        message: "This product already exists."
      });
    }

    res.status(500).json({
      message: "Failed to update product."
    });
  }
});

// DELETE: Delete a product
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM products WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Product not found."
      });
    }

    res.json({
      message: "Product deleted successfully!"
    });
  } catch (error) {
    console.error("Delete product error:", error.message);

    res.status(500).json({
      message: "Failed to delete product."
    });
  }
});

module.exports = router;
