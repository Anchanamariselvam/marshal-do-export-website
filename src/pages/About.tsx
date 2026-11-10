import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Ship,
  Target,
  Eye,
  Handshake,
  Boxes,
} from "lucide-react";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./About.css";
import Footer from "../components/Footer";

const strengths = [
  {
    icon: <PackageCheck size={25} />,
    title: "Product-Focused Sourcing",
    description:
      "A product-led approach to sourcing Indian food commodities, with attention to specifications, consistency and buyer requirements.",
  },
  {
    icon: <ShieldCheck size={25} />,
    title: "Quality-Conscious Handling",
    description:
      "Careful attention to product condition, packaging requirements and handling throughout the order preparation process.",
  },
  {
    icon: <Ship size={25} />,
    title: "Export Coordination",
    description:
      "Coordinated communication around packaging, shipment planning and the documentation needed to support international trade.",
  },
  {
    icon: <Handshake size={25} />,
    title: "Long-Term Partnerships",
    description:
      "A commitment to clear communication, dependable service and building productive relationships with business buyers.",
  },
];

const productCategories = [
  "Premium and Deluxe Spices",
  "Whole and Ground Spices",
  "Rice Varieties",
  "Pulses and Lentils",
  "Dried Seafood",
  "Canned Fish Products",
];

function About() {
  return (
    <div className="about-page">
      <Header />

      <main>
        

        {/* COMPANY PROFILE */}
        <section className="about-section about-company-section">
          <div className="about-container about-company-grid">
            <div className="about-company-heading">
              <p className="about-section-label">OUR COMPANY</p>

              <h2>
                A Business Built Around Indian Food Commodities and Global
                Trade
              </h2>

              <div className="about-red-rule" />
            </div>

            <div className="about-company-copy">
              <p>
                Marshal Do Export is an Indian food commodities export
                business based in Kanyakumari, Tamil Nadu. Its product
                portfolio includes spices, rice, pulses and lentils, dried
                seafood, and canned fish products for business buyers.
              </p>

              <p>
                We recognise that successful international trade requires
                more than product availability. Buyers need clear
                specifications, consistent communication, appropriate
                packaging and coordination throughout the order process.
              </p>

              <p>
                Our approach centres on understanding buyer requirements,
                communicating product details clearly and coordinating the
                steps involved in preparing commodities for international
                supply.
              </p>

              <p>
                With India as our sourcing base, we aim to build meaningful
                business relationships by combining knowledge of our product
                categories with a service-oriented approach to export trade.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
<section className="about-section about-purpose-section">
  <div className="about-container">
    <div className="about-section-heading">
      <p className="about-section-label">OUR DIRECTION</p>
      <h2>Purpose Behind Every Partnership</h2>
      <p>
        A clear purpose, a practical approach and a long-term view of
        international business.
      </p>
    </div>

    {/* VISION - IMAGE LEFT, TEXT RIGHT */}
    <article className="about-purpose-row about-vision-row">
      <div className="about-purpose-image">
        <img
          src="/images/Vision.jpg"
          alt="Marshal Do Export vision for international trade"
          loading="lazy"
        />
      </div>

      <div className="about-purpose-content">
        
<div className="about-purpose-label">
  <div className="about-purpose-icon">
    <Eye size={25} />
  </div>

  <span>OUR VISION</span>
</div>


        <h3>Build Lasting International Partnerships</h3>

        <p>
          To develop a trusted position in international food
          commodity trade by strengthening buyer relationships,
          broadening market connections and maintaining a consistent
          focus on product requirements and service quality.
        </p>
      </div>
    </article>

    {/* MISSION - TEXT LEFT, IMAGE RIGHT */}
    <article className="about-purpose-row about-mission-row">
      <div className="about-purpose-content">
        
<div className="about-purpose-label">
  <div className="about-purpose-icon">
    <Target size={25} />
  </div>

  <span>OUR MISSION</span>
</div>


        <h3>Deliver Value Through Reliable Supply</h3>

        <p>
          To connect buyers with Indian food commodities through
          attentive sourcing, clear product communication and
          coordinated export processes that support informed
          purchasing decisions and dependable business relationships.
        </p>
      </div>

      <div className="about-purpose-image">
        <img
          src="/images/Mision.jpg"
          alt="Marshal Do Export mission to connect buyers with Indian food commodities"
          loading="lazy"
        />
      </div>
    </article>
  </div>
</section>

        {/* BUSINESS APPROACH */}
        <section className="about-section about-strengths-section">
          <div className="about-container">
            <div className="about-section-heading">
              <p className="about-section-label">OUR BUSINESS APPROACH</p>
              <h2>Trade Supported by Attention to Detail</h2>
              <p>
                We focus on the practical details that matter when sourcing
                and supplying food commodities to business customers.
              </p>
            </div>

            <div className="about-strengths-grid">
              {strengths.map((strength, index) => (
                <article className="about-strength-card" key={strength.title}>
                  <div className="about-strength-top">
                    <span className="about-strength-icon">
                      {strength.icon}
                    </span>

                    <span className="about-strength-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{strength.title}</h3>

                  <p>{strength.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT PORTFOLIO */}
        <section className="about-section about-portfolio-section">
          <div className="about-container about-portfolio-grid">
            <div className="about-portfolio-copy">
              <p className="about-section-label">OUR PRODUCT PORTFOLIO</p>

              <h2>
                A Diverse Range of Indian Food Commodities
              </h2>

              <p>
                Our portfolio brings together agricultural commodities and
                seafood products for buyers seeking to explore Indian
                products for their respective markets.
              </p>

              <p>
                Product selection, available specifications, packaging
                formats and order requirements can be discussed according
                to the product and buyer's needs.
              </p>

              <Link to="/products" className="about-text-link">
                Discover Our Product Categories <ArrowRight size={17} />
              </Link>
            </div>

            <div className="about-portfolio-panel">
              <div className="about-portfolio-panel-heading">
                <Boxes size={23} />
                <span>PRODUCT CATEGORIES</span>
              </div>

              <div className="about-category-list">
                {productCategories.map((category) => (
                  <div className="about-category-item" key={category}>
                    <CheckCircle2 size={18} />
                    <span>{category}</span>
                    <ArrowRight size={15} />
                  </div>
                ))}
              </div>

              <p className="about-portfolio-note">
                Contact our team to discuss product availability,
                specifications and order requirements.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL TRADE */}
        <section className="about-trade-section">
          <div className="about-trade-overlay" />

          <div className="about-container about-trade-content">
            <Globe2 size={37} />

            <p className="about-trade-label">INDIA TO INTERNATIONAL MARKETS</p>

            <h2>
              Building Business Connections Beyond Borders
            </h2>

            <p>
              We welcome enquiries from importers, distributors, wholesalers
              and other businesses interested in Indian food commodities.
              Share your product interests and purchasing requirements to
              begin a conversation with our team.
            </p>

            <Link to="/contact" className="about-trade-button">
              Start a Business Enquiry <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

     
       <Footer />
    </div>
  );
}

export default About;
