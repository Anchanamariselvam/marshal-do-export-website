import { useState, useEffect } from "react";import { ArrowRight, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Products.css";

export type Product = {
  name: string;
  category: string;
  image: string;
  slug: string;
  subtitle?: string;
  description: string[];
};

export const categories = [
  "All",
  "Deluxe Spices",
  "Spices",
  "Rice",
  "Pulses & Lentils",
  "Spices Powders",
  "Dried Sea Foods",
  "Canned Fish",
];

export const products: Product[] = [
  // DELUXE SPICES
  {
    name: "Green Cardamom",
    category: "Deluxe Spices",
    image: "/images/Green Cardamom_.jpg",
    slug: "green-cardamom",
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
    slug: "keeri-parai-cloves",
    description: [
      "High-Eugenol Keeri Parai Cloves.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Black Pepper",
    category: "Deluxe Spices",
    image: "/images/Black Pepper_.jpg",
    slug: "black-pepper",
    description: [
      "Selected black pepper for export markets.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Nutmeg",
    category: "Deluxe Spices",
    image: "/images/Nutmeg.jpg",
    slug: "nutmeg",
    description: [
      "Quality nutmeg sourced for international markets.",
      "Available in EU and Conventional grades.",
    ],
  },
  {
    name: "Mace Flowers",
    category: "Deluxe Spices",
    image: "/images/Mace Flowers.jpg",
    slug: "mace-flowers",
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
    slug: "cumin-seeds",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Fennel Seeds",
    category: "Spices",
    image: "/images/Fennel Seed.jpg",
    slug: "Fennel-seeds",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Coriander Seeds",
    category: "Spices",
    image: "/images/Coriander Seeds.avif",
    slug: "coriander-seeds",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Mustard Seeds",
    category: "Spices",
    image: "/images/Mustard Seeds.avif",
    slug: "mustard-seeds",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Ajwain",
    category: "Spices",
    image: "/images/Ajwain.jpg",
    slug: "ajwain",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Fenugreek Seeds",
    category: "Spices",
    image: "/images/Fenugreek Seeds.jpg",
    slug: "fenugreek-seeds",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Kasuri Methi",
    category: "Spices",
    image: "/images/Kasuri-Methi.jpg",
    slug: "kasuri-methi",
    description: ["Available in EU and Conventional grades."],
  },

  // RICE
  {
    name: "Seeraga Samba Rice",
    category: "Rice",
    image: "/images/seeraga samba rice.jpg",
    slug: "seeraga-samba-rice",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Matta Rice",
    category: "Rice",
    image: "/images/matta_rice.webp",
    slug: "matta-rice",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Ponni Rice",
    category: "Rice",
    image: "/images/Ponni Rice.jpg",
    slug: "ponni-rice",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Karuppu Kavuni Rice",
    category: "Rice",
    image: "/images/Karuppu Kavuni Rice.jpg",
    slug: "karuppu-kavuni-rice",
    description: ["Available in EU and Conventional grades."],
  },
  {
    name: "Sona Masoori Rice",
    category: "Rice",
    image: "/images/Sona Masoori Rice.jpg",
    slug: "sona-masoori-rice",
    description: ["Available in EU and Conventional grades."],
  },
  
  {
    name: "Traditional Rice & Millets",
    category: "Rice",
    image: "/images/traditional-rice-millets.jpg",
    slug: "traditional-rice-millets",
    description: ["A selection of traditional rice varieties and millets."],
  },

  // PULSES & LENTILS
  {
    name: "Red Lentils",
    category: "Pulses & Lentils",
    image: "/images/Red Lentils.jpg",
    slug: "red-lentils",
    description: ["Available in whole and split forms."],
  },
  {
    name: "Yellow Lentils",
    category: "Pulses & Lentils",
    image: "/images/Yellow Lentils.jpg",
    slug: "Yellow Lentils",
    description: ["Available in whole and split forms."],
  },
  {
    name: "Urad Dal",
    category: "Pulses & Lentils",
    image: "/images/Urad dal.jpg",
    slug: "urad-dal",
    description: ["Available in whole and split forms."],
  },
  {
    name: "Chana Dal",
    category: "Pulses & Lentils",
    image: "/images/Chana Dal.jpg",
    slug: "chana-dal",
    description: ["Selected Chana Dal for export."],
  },
  {
    name: "Red Cowpeas",
    category: "Pulses & Lentils",
    image: "/images/Red Cowpeas.jpg",
    slug: "red-cowpeas",
    description: ["Selected red cowpeas for export."],
  },

  // SPICES POWDERS
  {
    name: "Black Pepper Powder",
    category: "Spices Powders",
    image: "/images/Black Pepper Powder.jpg",
    slug: "black-pepper-powder",
    description: ["Black pepper processed into powder."],
  },
  {
    name: "Cloves Powder",
    category: "Spices Powders",
    image: "/images/Cloves Powder.jpg",
    slug: "cloves-powder",
    description: ["Cloves processed into powder."],
  },
  {
    name: "Jaffna Curry Powder",
    category: "Spices Powders",
    image: "/images/Jaffna Curry Powder.jpg",
    slug: "jaffna-curry-powder",
    description: ["Jaffna-style curry powder."],
  },

  // DRIED SEA FOODS
  {
    name: "Dried Queen Fish",
    category: "Dried Sea Foods",
    image: "/images/Dried queen fish.jpg",
    slug: "dried-queen-fish",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Sailfish",
    category: "Dried Sea Foods",
    image: "/images/Dried Sailfish.jpg",
    slug: "dried-sailfish",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Anchovy",
    category: "Dried Sea Foods",
    image: "/images/Dried Anchovy.jpg",
    slug: "dried-anchovy",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Croaker",
    category: "Dried Sea Foods",
    image: "/images/Dried Croaker.jpg",
    slug: "dried-croaker",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Shark",
    category: "Dried Sea Foods",
    image: "/images/Dried shark.jpg",
    slug: "dried-shark",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Sardine",
    category: "Dried Sea Foods",
    image: "/images/Dried Sardine.jpg",
    slug: "dried-sardine",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Maldives Chips",
    category: "Dried Sea Foods",
    image: "/images/Maldivs Chips.jpg",
    slug: "maldives-chips",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Baby Shrimps",
    category: "Dried Sea Foods",
    image: "/images/Dried Baby Shrimps.jpg",
    slug: "dried-baby-shrimps",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Dried Shrimps",
    category: "Dried Sea Foods",
    image: "/images/Dried Shrimps.jpg",
    slug: "dried-shrimps",
    description: ["Moisture level: 8/100 (as provided)."],
  },
  {
    name: "Chemmeen",
    category: "Dried Sea Foods",
    image: "/images/Chemmeen.jpg",
    slug: "chemmeen",
    description: ["Moisture level: 8/100 (as provided)."],
  },

  // CANNED FISH
  {
    name: "Jack Mackerel in Brine",
    category: "Canned Fish",
    image: "/images/Jack Mackerel in Brine.jpg",
    slug: "jack-mackerel-in-brine",
    description: ["Canned jack mackerel in brine."],
  },
  {
    name: "Jack Mackerel in Tomato Sauce",
    category: "Canned Fish",
    image: "/images/Jack Mackerel in Tomato Sauce.jpg",
    slug: "jack-mackerel-in-tomato-sauce",
    description: ["Canned jack mackerel in tomato sauce."],
  },
  {
    name: "Jack Mackerel in Olive",
    category: "Canned Fish",
    image: "/images/Jack Mackerel in Olive Oil.avif",
    slug: "jack-mackerel-in-olive",
    description: ["Canned jack mackerel in olive."],
  },
];

function Products() {
  
const [activeCategory, setActiveCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");
const [displayProducts, setDisplayProducts] = useState<Product[]>(products);
useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data) => {
  const formattedProducts: Product[] = data.map((item: any) => ({
    name: item.name,
    category: item.category_name || item.category,
    image: item.image || item.image_url || "",
    slug: item.slug,
    subtitle: item.subtitle,
    description: Array.isArray(item.description)
      ? item.description
      : typeof item.description === "string"
      ? item.description
          .split("\n")
          .map((line: string) => line.trim())
          .filter(Boolean)
      : [],
  }));

  setDisplayProducts(formattedProducts);
})
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}, []);

const filteredProducts = displayProducts.filter((product) => {  const matchesCategory =
    activeCategory === "All" ||
    product.category === activeCategory;

  const search = searchTerm.trim().toLowerCase();

  const matchesSearch =
    search === "" ||
    product.name.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search) ||
    product.description.some((item) =>
      item.toLowerCase().includes(search)
    );

  return matchesCategory && matchesSearch;
});


  return (
    <div className="products-page">
      <Header />

      <main>
        {/* Products Hero Section */}
<section className="products-hero">
  <div className="products-hero-content">
    {/* Left Content */}
    <div className="products-hero-text">
      <span className="products-hero-label">
        OUR PRODUCT RANGE
      </span>

      <h1>
        Premium Indian
        <br />
        <span>Products for Global Markets</span>
      </h1>

      <p className="products-hero-description">
        Discover our carefully sourced range of premium spices, rice,
        pulses, lentils, and agricultural products. Every product reflects
        our commitment to quality, consistency, and trusted global exports.
      </p>
    </div>

    {/* Right Image */}
    <div className="products-hero-image-wrap">
      <img
        src="/images/products-hero.jpg"
        alt="Premium Indian spices sourced for global food exports"
        className="products-hero-image"
      />

      <div className="products-hero-image-badge">
        <span>PREMIUM QUALITY</span>
        <span className="products-badge-dot">•</span>
        <span>GLOBAL EXPORTS</span>
      </div>
    </div>
  </div>
</section>

        
{/* CATEGORY FILTER + SEARCH */}
<section className="products-filter-section">
  <div className="products-container">
    <div className="products-filter-toolbar">

      {/* CATEGORY BUTTONS - LEFT */}
      <div className="products-filter-list">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`products-filter-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* COMPACT SEARCH - RIGHT */}
      <div className="products-search-wrapper">
        <Search size={15} className="products-search-icon" />

        <input
          type="text"
          className="products-search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && (
          <button
            type="button"
            className="products-search-clear"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

    </div>
  </div>
</section>


        <section className="products-list-section">
          <div className="products-container">
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="product-card-image-link"
                  >
                    <div className="product-card-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <div className="product-card-content">
                    <p className="product-card-category">
                      {(product.category || "Other").toUpperCase()}
                    </p>

                    <h3>{product.name}</h3>

                    {product.subtitle && (
                      <p className="product-card-subtitle">
                        {product.subtitle}
                      </p>
                    )}

                    <div className="product-card-actions">
                      <Link
                        to={`/products/${product.slug}`}
                        className="product-view-button"
                      >
                        View Details
                      </Link>

                      <Link
                        to="/contact"
                        className="product-enquiry-button"
                      >
                        Send Enquiry
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="products-empty-message">
                No products found in this category.
              </p>
            )}
          </div>
        </section>

        <section className="products-packaging-section">
          <div className="products-container products-packaging-content">
            <div className="products-packaging-copy">
              <h2>Looking for a Specific Custom Packaging Size?</h2>

              <p>
                We adapt packaging configurations and specifications
                according to your international business requirements.
              </p>
            </div>

            <Link
              to="/contact"
              className="products-packaging-button"
            >
              Initiate B2B Enquiry <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Products;
