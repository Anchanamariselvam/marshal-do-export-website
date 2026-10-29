import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Ship,
} from "lucide-react";
import "./Home.css";

const categories = [
  {
    name: "Deluxe Spices",
    description:
      "Explore selected spices, including green cardamom, cloves, black pepper, nutmeg and mace.",
    filter: "Deluxe Spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Spices",
    description:
      "Discover whole spices, including cumin, fennel, coriander, mustard, ajwain and fenugreek.",
    filter: "Spices",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rice",
    description:
      "Enquire about available rice products and discuss varieties and requirements with our team.",
    filter: "Rice",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pulses & Lentils",
    description:
      "Explore pulse and lentil categories for your food sourcing requirements.",
    filter: "Pulses and Lentils",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dried Seafood",
    description: "Discover our dried seafood category for business sourcing enquiries.",
    filter: "Dried Seafood",
    image:
      "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Canned Fish",
    description:
      "Enquire about canned fish products, including Jack Mackerel in Olive Oil.",
    filter: "Canned Fish",
    image:
      "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&w=900&q=85",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Sourcing",
    description: "A product portfolio presented with clear, accurate information.",
  },
  {
    icon: PackageCheck,
    title: "Packaging Coordination",
    description: "Discuss product presentation and packing requirements with our team.",
  },
  {
    icon: Ship,
    title: "Export Enquiry Support",
    description: "Share your destination and shipment requirements for discussion.",
  },
  {
    icon: Globe2,
    title: "Global Market Enquiries",
    description: "Connect with our coordinator about your international sourcing needs.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">
              INDIAN FOOD PRODUCTS · INTERNATIONAL B2B TRADE
            </span>

            <h1>
              Connecting Indian
              <br />
              Food Products with
              <br />
              <span>Global Markets</span>
            </h1>

            <p className="hero-description">
              Explore our range of Indian spices, rice, pulses, lentils and
              seafood products for international sourcing enquiries. We welcome
              discussions with importers, distributors and business buyers
              about product availability, packaging requirements and export
              enquiries.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn btn--accent">
                Explore Our Products <ArrowRight size={17} />
              </Link>

              <Link to="/contact" className="btn hero-secondary-btn">
                Send an Enquiry <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-note">
              <CheckCircle2 size={17} />
              <span>
                Your Partner for Product Sourcing and Export Enquiries
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1400&q=90"
              alt="Agricultural produce prepared for commercial distribution"
            />

            <div className="hero-image-label">
              <span className="hero-label-icon">
                <Ship size={22} />
              </span>
              <div>
                <strong>MARSHAL DO EXPORT</strong>
                <span>Indian Food & Agricultural Exports</span>
              </div>
            </div>

            <div className="hero-image-accent" />
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="feature-marquee" aria-label="Our export services">
          <div className="feature-marquee-track">
            {[...features, ...features].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  className="feature-item"
                  key={`${feature.title}-${index}`}
                  aria-hidden={index >= features.length}
                >
                  <div className="feature-icon"><Icon size={22} /></div>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=85"
              alt="Commercial logistics and goods handling"
              loading="lazy"
            />
            <div className="about-image-caption">
              <span className="caption-dot" />
              <span>Indian Products for Global Markets</span>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">ABOUT MARSHAL DO EXPORT</span>
            <h2>
              Bringing Indian Food Products to International Markets
            </h2>
            <p>
              MARSHAL DO EXPORT focuses on connecting international buyers
              with a diverse selection of Indian food and agricultural
              products. Our portfolio includes spices, rice, pulses, lentils
              and seafood for business-to-business sourcing enquiries.
              <br />
              <br />
              We aim to make the enquiry process straightforward through clear
              product information, responsive communication and coordination
              around buyers' requirements.
            </p>

            <div className="mission-grid">
              <article>
                <h3>Our Mission</h3>
                <p>
                  To connect international buyers with Indian food and
                  agricultural products through clear communication, informed
                  sourcing enquiries and professional coordination.
                </p>
              </article>

              <article>
                <h3>Our Approach</h3>
                <p>
                  We focus on understanding buyer requirements, sharing
                  available product information and discussing packaging and
                  destination-related needs to support informed business
                  decisions.
                </p>
              </article>
            </div>

            <Link to="/about" className="text-link">
              Discover Our Company <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft product-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR PRODUCT PORTFOLIO</span>
              <h2>Explore Our Product Range</h2>
              <p>
                Discover our selection of Indian food and agricultural
                products for international business enquiries. Explore the
                categories below to identify products relevant to your sourcing
                requirements.
              </p>
            </div>

            <Link to="/products" className="btn btn--outline">
              View All Products <ArrowRight size={17} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                to={`/products?category=${encodeURIComponent(category.filter)}`}
                className="category-card"
                key={category.name}
              >
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />
                  <span className="category-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="category-body">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-link">
                    Explore {category.name} <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section logistics-section">
        <div className="container logistics-grid">
          <div className="logistics-content">
            <span className="eyebrow">INTERNATIONAL B2B ENQUIRIES</span>
            <h2>Let's Discuss Your Product Requirements</h2>
            <p>
              Looking for Indian food and agricultural products for your
              business? Share your product interests, destination market and
              packaging requirements with MARSHAL DO EXPORT.
              <br />
              <br />
              Our team can review your enquiry and discuss the available
              product information and next steps.
            </p>

            <ul className="logistics-list">
              <li>
                <CheckCircle2 size={19} />
                Product and category enquiries
              </li>
              <li>
                <CheckCircle2 size={19} />
                Packaging and specification discussions
              </li>
              <li>
                <CheckCircle2 size={19} />
                Destination-market requirements
              </li>
              <li>
                <CheckCircle2 size={19} />
                Business sourcing enquiries
              </li>
            </ul>

            <div className="hero-actions">
              <Link to="/enquiry" className="btn btn--primary">
                Send an Enquiry <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Contact Our Team <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="logistics-image">
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=85"
              alt="Cargo shipping containers at a port"
              loading="lazy"
            />
            <div className="logistics-image-overlay">
              <Ship size={27} />
              <span>International Trade Enquiries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="credentials-section">
        <div className="container credentials-grid">
          <div>
            <span className="eyebrow">COMPANY INFORMATION</span>
            <h2>Regulatory and Industry References</h2>
            <p>
              We recognise the importance of understanding applicable
              regulatory and industry requirements when discussing
              international food trade. Relevant registration details and
              approvals should be confirmed for the specific business and
              products involved.
            </p>
          </div>

          <div className="credentials-marquee" aria-label="Export credential references">
            <div className="credentials-marquee-track">
              {[0, 1, 2, 3].map((item) => (
                <article className="credential-card" key={item} aria-hidden={item > 1}>
                  {item % 2 === 0 ? <ShieldCheck size={27} /> : <Globe2 size={27} />}
                  <div>
                    <h3>{item % 2 === 0 ? "US FDA" : "MPEDA"}</h3>
                    <p>
                      {item % 2 === 0
                        ? "Registration or compliance details to be confirmed."
                        : "Registration or membership details to be confirmed, as applicable."}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A CLOSER LOOK</span>
              <h2>Our Product and Export Gallery</h2>
              <p>
                Explore visual highlights of products, packaging and export
                operations as the company gallery develops.
              </p>
            </div>

            <Link to="/gallery" className="btn btn--outline">
              View Gallery <ArrowRight size={17} />
            </Link>
          </div>

          <div className="gallery-preview-grid">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85"
              alt="Selection of spices"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85"
              alt="Agricultural products"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=85"
              alt="Shipping containers"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}