
const db = require("./db");

// Original catalog categories
const categories = [
  "Deluxe Spices",
  "Spices",
  "Rice",
  "Pulses & Lentils",
  "Spices Powders",
  "Dried Sea Foods",
  "Canned Fish",
];

// Original catalog products
const products = [
  // DELUXE SPICES
  {
    name: "Green Cardamom",
    category: "Deluxe Spices",
    image: "/images/Green Cardamom_.jpg",
    description: [
      "Available in sizes ranging from 5 mm to 8.5 mm.",
      "Includes Jumbo grade.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Keeri Parai Cloves",
    category: "Deluxe Spices",
    image: "/images/High-Eugenol Keeri Parai Cloves_.webp",
    description: [
      "High-Eugenol Keeri Parai Cloves.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Black Pepper",
    category: "Deluxe Spices",
    image: "/images/Black Pepper_.jpg",
    description: [
      "Selected black pepper for export markets.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Nutmeg",
    category: "Deluxe Spices",
    image: "/images/Nutmeg.jpg",
    description: [
      "Quality nutmeg sourced for international markets.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Mace Flowers",
    category: "Deluxe Spices",
    image: "/images/Mace Flowers.jpg",
    description: [
      "Selected mace flowers for export.",
      "Available in EU and Conventional grades.",
    ],
  },

  // SPICES
  {
    name: "Cumin Seeds",
    category: "Spices",
    image: "/images/Cumin.webp",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Fennel Seeds",
    category: "Spices",
    image: "/images/Fennel Seed.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Coriander Seeds",
    category: "Spices",
    image: "/images/Coriander Seeds.avif",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Mustard Seeds",
    category: "Spices",
    image: "/images/Mustard Seeds.avif",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Ajwain",
    category: "Spices",
    image: "/images/Ajwain.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Fenugreek Seeds",
    category: "Spices",
    image: "/images/Fenugreek Seeds.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Kasuri Methi",
    category: "Spices",
    image: "/images/Kasuri-Methi.jpg",
    description: ["Available in EU and Conventional grades."],
  },

  // RICE
  {
    name: "Seeraga Samba Rice",
    category: "Rice",
    image: "/images/seeraga samba rice.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Matta Rice",
    category: "Rice",
    image: "/images/matta_rice.webp",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Ponni Rice",
    category: "Rice",
    image: "/images/Ponni Rice.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Karuppu Kavuni Rice",
    category: "Rice",
    image: "/images/Karuppu Kavuni Rice.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Sona Masoori Rice",
    category: "Rice",
    image: "/images/Sona Masoori Rice.jpg",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Traditional Rice & Millets",
    category: "Rice",
    image: "/images/traditional-rice-millets.jpg",
    description: [
      "A selection of traditional rice varieties and millets.",
    ],
  },

  // PULSES & LENTILS
  {
    name: "Red Lentils",
    category: "Pulses & Lentils",
    image: "/images/Red Lentils.jpg",
    description: ["Available in whole and split forms."],
  },
  {
    name: "Yellow Lentils",
    category: "Pulses & Lentils",
    image: "/images/Yellow Lentils.jpg",
    description: ["Available in whole and split forms."],
  },
  {
    name: "Urad Dal",
    category: "Pulses & Lentils",
    image: "/images/Urad dal.jpg",
    description: ["Available in whole and split forms."],
  },
  {
    name: "Chana Dal",
    category: "Pulses & Lentils",
    image: "/images/Chana Dal.jpg",
    description: ["Selected Chana Dal for export."],
  },
  {
    name: "Red Cowpeas",
    category: "Pulses & Lentils",
    image: "/images/Red Cowpeas.jpg",
    description: ["Selected red cowpeas for export."],
  },

  // SPICES POWDERS
  {
    name: "Black Pepper Powder",
    category: "Spices Powders",
    image: "/images/Black Pepper Powder.jpg",
    description: ["Black pepper processed into powder."],
  },
  {
    name: "Cloves Powder",
    category: "Spices Powders",
    image: "/images/Cloves Powder.jpg",
    description: ["Cloves processed into powder."],
  },
  {
    name: "Jaffna Curry Powder",
    category: "Spices Powders",
    image: "/images/Jaffna Curry Powder.jpg",
    description: ["Jaffna-style curry powder."],
  },

  // DRIED SEA FOODS
  {
    name: "Dried Queen Fish",
    category: "Dried Sea Foods",
    image: "/images/Dried queen fish.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Sailfish",
    category: "Dried Sea Foods",
    image: "/images/Dried Sailfish.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Anchovy",
    category: "Dried Sea Foods",
    image: "/images/Dried Anchovy.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Croaker",
    category: "Dried Sea Foods",
    image: "/images/Dried Croaker.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Shark",
    category: "Dried Sea Foods",
    image: "/images/Dried shark.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Sardine",
    category: "Dried Sea Foods",
    image: "/images/Dried Sardine.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Maldives Chips",
    category: "Dried Sea Foods",
    image: "/images/Maldivs Chips.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Baby Shrimps",
    category: "Dried Sea Foods",
    image: "/images/Dried Baby Shrimps.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Shrimps",
    category: "Dried Sea Foods",
    image: "/images/Dried Shrimps.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Chemmeen",
    category: "Dried Sea Foods",
    image: "/images/Chemmeen.jpg",
    description: ["Moisture level: 8/100 (as provided)."],
  },

  // CANNED FISH
  {
    name: "Jack Mackerel in Brine",
    category: "Canned Fish",
    image: "/images/Jack Mackerel in Brine.jpg",
    description: ["Canned jack mackerel in brine."],
  },
  {
    name: "Jack Mackerel in Tomato Sauce",
    category: "Canned Fish",
    image: "/images/Jack Mackerel in Tomato Sauce.jpg",
    description: ["Canned jack mackerel in tomato sauce."],
  },
  {
    name: "Jack Mackerel in Olive",
    category: "Canned Fish",
    image: "/images/Jack Mackerel in Olive Oil.avif",
    description: ["Canned jack mackerel in olive."],
  },
];

// Generate unique slug
async function generateUniqueSlug(table, name) {
  const baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const [rows] = await db.query(
      `SELECT id FROM ${table} WHERE slug = ? LIMIT 1`,
      [slug]
    );

    if (rows.length === 0) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

async function restoreCatalog() {
  let categoriesAdded = 0;
  let productsAdded = 0;
  let categoriesSkipped = 0;
  let productsSkipped = 0;

  try {
    console.log("Catalog restoration started...\n");

    // Step 1: Restore categories
    const categoryIds = {};

    for (const categoryName of categories) {
      const [existing] = await db.query(
        `SELECT id, name
         FROM categories
         WHERE LOWER(TRIM(name)) = LOWER(TRIM(?))
         LIMIT 1`,
        [categoryName]
      );

      if (existing.length > 0) {
        categoryIds[categoryName] = existing[0].id;
        categoriesSkipped++;

        console.log(`Category already exists: ${categoryName}`);
      } else {
        const slug = await generateUniqueSlug(
          "categories",
          categoryName
        );

        const [result] = await db.query(
          `INSERT INTO categories
           (name, slug, description, image_url)
           VALUES (?, ?, ?, ?)`,
          [categoryName, slug, "", ""]
        );

        categoryIds[categoryName] = result.insertId;
        categoriesAdded++;

        console.log(`Category added: ${categoryName}`);
      }
    }

    console.log("\nCategory restoration completed.\n");

    // Step 2: Restore products
    for (const product of products) {
      const [existing] = await db.query(
        `SELECT id, name
         FROM products
         WHERE LOWER(TRIM(name)) = LOWER(TRIM(?))
         LIMIT 1`,
        [product.name]
      );

      if (existing.length > 0) {
        productsSkipped++;

        console.log(`Product already exists: ${product.name}`);
        continue;
      }

      const categoryId = categoryIds[product.category];

      if (!categoryId) {
        throw new Error(
          `Category not found for product: ${product.name}`
        );
      }

      const slug = await generateUniqueSlug(
        "products",
        product.name
      );

      const description = product.description.join("\n");

      await db.query(
        `INSERT INTO products
         (name, slug, description, category_id, image_url)
         VALUES (?, ?, ?, ?, ?)`,
        [
          product.name,
          slug,
          description,
          categoryId,
          product.image,
        ]
      );

      productsAdded++;

      console.log(`Product added: ${product.name}`);
    }

    console.log("\n================================");
    console.log("CATALOG RESTORATION COMPLETED");
    console.log("================================");
    console.log(`Categories added: ${categoriesAdded}`);
    console.log(`Categories skipped: ${categoriesSkipped}`);
    console.log(`Products added: ${productsAdded}`);
    console.log(`Products skipped: ${productsSkipped}`);
    console.log("================================");
  } catch (error) {
    console.error("\nCatalog restoration failed:", error.message);
    process.exitCode = 1;
  } finally {
    process.exit();
  }
}

restoreCatalog();
