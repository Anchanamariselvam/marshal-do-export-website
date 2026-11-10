import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  MapPin,
  PackageCheck,
  Ship,
} from "lucide-react";

import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  {
    title: "Deluxe Spices",
    description:
      "Select high-grade whole cardamom, cloves, and premium saffron.",
    image: "/images/Deluxe_Spices.jpeg",
    link: "/products",
  },
  {
    title: "Spices",
    description:
      "Pure ground and whole turmeric, chilli powder, black pepper, and cumin seed.",
    image: "/images/Spices.jpg",
      link: "/products",
  },
  {
    title: "Rice",
    description:
      "Premium long-grain basmati rice, cleaned and sorted for international markets.",
    image: "/images/Rice.jpg",
      link: "/products",
  },
  {
    title: "Pulses & Lentils",
    description:
      "Export-grade red lentils, chickpeas, and green gram, moisture-controlled.",
    image: "/images/Lentil.jpg",
      link: "/products",
  },
  {
    title: "Dried Sea Foods",
    description:
      "Hygienically dried premium prawns, ribbon fish, and ancillary sea catches.",
    image: "/images/Dried_Fish.jpg",
      link: "/products",
  },
  {
    title: "Canned Fish",
    description:
      "Sustainably caught tuna and sardines packed in premium sunflower oil.",
    image: "/images/Canned_Fish.jpeg",
      link: "/products",
  },
];

const gallery = [
  {
    title: "Packaging Operations",
    image: "/images/Packaging.jpeg",
  },
  {
    title: "Warehouse Management",
    image: "/images/Warehouse.jpeg",
  },
  {
    title: "Seafreight Cargo Loading",
    image: "/images/Cargo.jpeg",
  },
];



function Home() {
 
  return (
    <div className="home-page">
      <Header />

<div className="hero-announcement ">
  <div className="hero-announcement-track">
    <span>
      <span className="announcement-item">
        Premium Quality Indian Food Exports
      </span>
      <span className="announcement-dot">•</span>

      <span className="announcement-item">
        Delivering Excellence Across International Markets
      </span>
      <span className="announcement-dot">•</span>

      <span className="announcement-item">
        Trusted Partnerships and Reliable Supply
      </span>
      <span className="announcement-dot">•</span>

      <span className="announcement-item">
        Connecting Indian Producers to Global Markets
      </span>
      <span className="announcement-dot">•</span>
    </span>

    <span aria-hidden="true">
      <span className="announcement-item">
        Premium Quality Indian Food Exports
      </span>
      <span className="announcement-dot">•</span>

      <span className="announcement-item">
        Delivering Excellence Across International Markets
      </span>
      <span className="announcement-dot">•</span>

      <span className="announcement-item">
        Trusted Partnerships and Reliable Supply
      </span>
      <span className="announcement-dot">•</span>

      <span className="announcement-item">
        Connecting Indian Producers to Global Markets
      </span>
      <span className="announcement-dot">•</span>
    </span>
  </div>
</div>

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span /> YOUR TRUSTED PARTNER IN GLOBAL FOOD TRADE
              </p>

              <h1>
                Quality That Travels
                <br />
              
                Worldwide
              </h1>

              <p className="hero-description">
                Processing and exporting premium Indian spices, rice, pulses, and food commodities to global markets through quality-driven operations and reliable export solutions.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#products">
                  Explore Products <ArrowRight size={15} />
                </a>
                <a className="button button-outline" href="#contact">
                  Send an Enquiry
                </a>
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                src={`${import.meta.env.BASE_URL}images/Saffron.png`}
                alt="Premium Indian spices prepared for international food exports"
              />
              <div className="hero-image-label">
                <Globe2 size={17} />
                <span>
                  <strong>Authentic Indian Spices</strong>
                  <small>Carefully Selected, Quality Assured</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY STRIP */}
        <section className="quality-strip" aria-label="Our strengths">
          <div className="site-container quality-grid">
            <div className="quality-item">
              <span className="quality-icon">
                <Award size={18} />
              </span>
              <strong>Quality Products</strong>
            </div>
            <div className="quality-item">
              <span className="quality-icon">
                <PackageCheck size={18} />
              </span>
              <strong>Export-Ready Packaging</strong>
            </div>
            <div className="quality-item">
              <span className="quality-icon">
                <Ship size={18} />
              </span>
              <strong>Reliable Shipping</strong>
            </div>
            <div className="quality-item">
              <span className="quality-icon">
                <Globe2 size={18} />
              </span>
              <strong>Global Markets</strong>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="site-container about-grid">
            <div className="about-image">
  <img
    src="/images/kanyakumari-memorial.jpg"
    alt="Vivekananda Rock Memorial surrounded by the sea in Kanyakumari, Tamil Nadu"
    loading="lazy"
  />

  <div className="about-image-caption">
    <MapPin size={16} />
    Kanyakumari, Tamil Nadu, India
  </div>
</div>

            <div className="about-copy">
              <p className="eyebrow">ABOUT MARSHAL DO EXPORT</p>
              <h2>Grounded in Kanyakumari, Serving the Whole World</h2>
              <p className="section-description">
                Indian exporter of premium groceries and food products based
                in Kanyakumari, Tamil Nadu, serving global markets with
                quality, trust, and reliable shipping. We source directly
                from premium growers to meet stringent global standards.
              </p>

              <div className="mission-grid">
                <article className="mission-card">
                  <h3>Our Mission</h3>
                  <p>
                    To bridge the gap between Indian agricultural harvesting
                    and international markets by ensuring pristine quality
                    preservation and flawless B2B trade execution.
                  </p>
                </article>
                <article className="mission-card">
                  <h3>Our Vision</h3>
                  <p>
                    To stand as the most trusted premier global supply chain
                    partner for authentic Indian dry goods, spices, and marine
                    foods, distinguished by reliability.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products-section" id="products">
          <div className="site-container">
            
<div className="products-heading-row">
  <div className="section-heading">
    <p className="eyebrow">PRODUCT DIRECTORY</p>
    <h2>Premium Portfolios We Export</h2>
  </div>

  <Link to="/products" className="all-categories-btn">
  View All Categories <ArrowRight size={16} />
</Link>
</div>


            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <a
                    href={product.link}
                    className={`product-image ${
  product.title === "Canned Fish" ? "canned-fish-image" : ""
}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />
                  </a>
                  <div className="product-card-content">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a
                      href={product.link}
                      className="product-link"
                      aria-label={`Explore ${product.title}`}
                    >
                      Explore Product <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LOGISTICS */}
        <section className="section logistics-section" id="export">
          <div className="site-container logistics-grid">
            <div className="logistics-copy">
              <p className="eyebrow">B2B LOGISTICS &amp; INFRASTRUCTURE</p>
              <h2>Seamless Packaging, Transport &amp; Global Reach</h2>

              <div className="logistics-feature">
                <CheckCircle2 size={18} />
                <div>
                  <h3>Quality Packaging</h3>
                  <p>
                    Strict moisture barrier lining and puncture-resistant
                    outer cartons tailored for overseas seafreight cargo.
                  </p>
                </div>
              </div>

              <div className="logistics-feature">
                <CheckCircle2 size={18} />
                <div>
                  <h3>Fast Shipping</h3>
                  <p>
                    Coordination with major logistics lines directly from
                    Tuticorin and Chennai ports for rapid transit times.
                  </p>
                </div>
              </div>

              <div className="logistics-feature">
                <CheckCircle2 size={18} />
                <div>
                  <h3>Worldwide Delivery</h3>
                  <p>
                    Robust compliance handling and clear documentation
                    dispatch for efficient customs clearance at any port.
                  </p>
                </div>
              </div>

              {/* <div className="destination-box">
                <h4>ACTIVE B2B TRADE DESTINATIONS</h4>
                <div className="destination-tags">
                  {destinations.map((destination) => (
                    <span key={destination}>{destination}</span>
                  ))}
                </div>
              </div> */}
            </div>

            
<div className="logistics-image">
  <img
    src="/images/Transport.jpeg"
    alt="International freight and shipping logistics"
    loading="lazy"
  />
</div>

          </div>
        </section>

        {/* ACCREDITATIONS
        <section className="accreditation-section">
          <div className="site-container accreditation-grid">
            <div className="accreditation-heading">
              <p className="eyebrow">ORGANISATIONAL ACCREDITATIONS</p>
              <h2>Key Institutional Association</h2>
            </div>

            <article className="accreditation-card">
              <ShieldCheck size={23} />
              <div>
                <h3>US FDA</h3>
                <p>
                  Prepared and aligned for food imports compliance to United
                  States markets.
                </p>
              </div>
            </article>

            <article className="accreditation-card">
              <Award size={23} />
              <div>
                <h3>MPEDA</h3>
                <p>
                  Registered for premium marine products export facilitation,
                  adhering to seafood preservation protocols.
                </p>
              </div>
            </article>
          </div>
        </section> */}

        {/* GALLERY */}
        <section className="section gallery-section" id="gallery">
          <div className="site-container">
            <div className="gallery-heading">
              <div>
                <p className="eyebrow">OPERATIONAL SNAPSHOTS</p>
                <h2>Behind the Scenes at Marshal Do Export</h2>
              </div>
             <Link
  className="button button-light-outline"
  to="/gallery"
>
  View Full Gallery <ArrowRight size={14} />
</Link>
            </div>

            <div className="gallery-grid">
              {gallery.map((item) => (
                <article className="gallery-card" key={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;