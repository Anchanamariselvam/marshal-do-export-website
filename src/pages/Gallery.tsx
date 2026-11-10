
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Gallery.css";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  // PRODUCT IMAGES — 3 placeholders
  {
    title: "Premium Indian Spices",
    category: "Products",
    image: "/images/gallery/Green Cardamom_.jpg",
  },
  {
    title: "Premium Rice & Grains",
    category: "Products",
    image: "/images/gallery/Rice.jpg",
  },
  {
    title: "Pulses & Lentils",
    category: "Products",
    image: "/images/gallery/Pulses.jpg",
  },

  // CONTAINER IMAGES — replace with your actual images
  {
    title: "Global Shipping",
    category: "Export & Logistics",
    image: "/images/gallery/container-export.jpeg",
  },
  {
    title: "Product Packaging & Presentation",
    category: "Export & Logistics",
    image: "/images/gallery/Warehouse.jpeg",
  },

  // PACKAGING IMAGES
  {
    title: "Export-Ready Packaging",
    category: "Packaging",
    image: "/images/gallery/Packaging.jpeg",
  },
  {
    title: "International Export Logistics",
    category: "Packaging",
    image: "/images/gallery/container-shipping.jpg",
  },

  // QUALITY IMAGE
  {
    title: "Quality & Product Inspection",
    category: "Quality",
    image: "/images/gallery/Transport.jpeg",
  },
];

const filters = [
  "All",
  "Products",
  "Packaging",
  "Quality",
  "Export & Logistics",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <Header />

      <main className="gallery-page">
        {/* Gallery Hero Section */}
<section className="gallery-hero">
  <div className="gallery-hero-content">
    <div className="gallery-hero-text">
      <span className="gallery-eyebrow">OUR GALLERY</span>

      <h1>
        A Closer Look at Our
        <br />
        <span>Export Excellence</span>
      </h1>

      <p>
        Explore the journey of our premium products — from careful sourcing
        and quality inspection to secure packaging and global shipment.
        Discover the standards, craftsmanship, and export operations that
        define Marshal Do Export.
      </p>
    </div>

    <div className="gallery-hero-image-wrap">
      <img
        src="/images/pack.png"
        alt="Premium food products and export packaging"
        className="gallery-hero-image"
      />

      <div className="gallery-image-badge">
        <span>QUALITY</span>
        <span className="gallery-badge-dot">•</span>
        <span>SOURCING</span>
        <span className="gallery-badge-dot">•</span>
        <span>EXPORTS</span>
      </div>
    </div>
  </div>
</section>
        {/* INTRO */}
        <section className="gallery-intro">
          <span className="gallery-section-label">OUR VISUAL COLLECTION</span>

          <h2>Quality That Speaks Through Every Image</h2>

          <p>
            Explore our premium agricultural products, export-ready packaging,
            and logistics operations. Each image reflects our commitment to
            quality, reliability, and trusted international business
            relationships.
          </p>
        </section>

        {/* FILTERS */}
        <section className="gallery-section">
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* IMAGE GRID */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                className="gallery-card"
                key={item.image}
                style={{ animationDelay: `${index * 0.06}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt={item.title} />

                  <div className="gallery-image-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>View Image ↗</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENQUIRY CTA */}
        <section className="gallery-cta">
          <div>
            <span className="gallery-section-label">LET'S WORK TOGETHER</span>
            <h2>Looking for Reliable Export Partners?</h2>
            <p>
              Connect with Marshal Do Export for product details, pricing,
              and business enquiries.
            </p>
          </div>

          <Link to="/contact" className="gallery-cta-button">
            Start Business Enquiry <ArrowRight size={18} />
          </Link>
        </section>

        {/* IMAGE PREVIEW */}
        {selectedImage && (
          <div
            className="gallery-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={28} />
            </button>

            <div
              className="gallery-lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} />
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
