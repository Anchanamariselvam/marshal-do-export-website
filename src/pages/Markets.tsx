
import {
  Globe2,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Markets.css";


const exportDestinations = [
  {
    country: "Brazil",
    flagImage: "images/brazil.png",
    region: "South America",
  },
  {
    country: "Canada",
    flagImage: "images/canada.png",
    region: "North America",
  },
  {
    country: "Australia",
    flagImage: "images/Australia.png",
    region: "Oceania",
  },
  {
    country: "New Zealand",
    flagImage: "images/new zealand.png",
    region: "Oceania",
  },
  {
    country: "Switzerland",
    flagImage: "images/switzerland.png",
    region: "Europe",
  },
  {
    country: "United Kingdom",
    flagImage: "images/united kingdom.png",
    region: "Europe",
  },
  {
    country: "United States",
    flagImage: "images/united state.png",
    region: "North America",
  },
];


export default function Markets() {
  return (
    <>
      <Header />

      <main className="markets-page">
        {/* HERO SECTION */}
        <section className="markets-hero">
          <div className="markets-hero-content">
            <div className="markets-hero-text">
              <span className="markets-hero-label">
                OUR GLOBAL PRESENCE
              </span>

              <h1>
                Connecting Indian
                <br />
                <span>Agriculture to Global Markets</span>
              </h1>

              <p>
                We connect India's premium agricultural products
                with international buyers through quality-focused
                sourcing, reliable export coordination, and long-term
                business relationships across global markets.
              </p>

              <div className="markets-hero-actions">
                <Link to="/contact" className="markets-primary-btn">
                  Explore Business Opportunities
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="markets-hero-image-wrap">
              <img
                src="/images/map.png"
                alt="Global food export operations and shipping containers"
                className="markets-hero-image"
              />

              <div className="markets-image-badge">
                <Globe2 size={17} />
                <span>INDIA TO THE WORLD</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="markets-intro">
          <div className="markets-container">
            <div className="markets-intro-heading">
              <span className="markets-section-label">
                INTERNATIONAL TRADE
              </span>

              <h2>
                Building Connections
                <br />
                <span>Beyond Borders</span>
              </h2>
            </div>

            <div className="markets-intro-content">
              <p>
                Marshal Do Export is focused on serving international
                B2B buyers seeking premium Indian agricultural and food
                products. From product sourcing to export coordination,
                we work toward dependable trade partnerships built on
                transparency and trust.
              </p>

              <Link to="/products" className="markets-text-link">
                Explore Our Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        
{/* EXPORT DESTINATIONS */}
<section className="markets-destinations">
  <div className="markets-container">
    <div className="markets-section-heading">
      <span className="markets-eyebrow">
        GLOBAL PRESENCE
      </span>

      <h2>
        Our Export <span>Destinations</span>
      </h2>

      <p>
        We proudly export premium Indian food products to
        international markets, building trusted partnerships
        across the globe.
      </p>
    </div>

    <div className="markets-country-carousel">
      <div className="markets-country-track">
        {[0, 1].map((copy) => (
          <div
            className="markets-country-group"
            key={`country-group-${copy}`}
            aria-hidden={copy === 1}
          >
            {exportDestinations.map((destination) => (
              <div
                className="markets-country-card"
                key={`${destination.country}-${copy}`}
              >
                <div className="markets-country-info">
                  <div className="markets-country-title">
                    
<img
  src={destination.flagImage}
  alt={`${destination.country} flag`}
  className="markets-country-flag"
/>


                    <h3>{destination.country}</h3>
                  </div>

                  <p>{destination.region}</p>
                </div>

                <div className="markets-country-footer">
                  <span>Export Destination</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* CERTIFICATIONS */}
        <section className="markets-certifications">
          <div className="markets-container">
            <div className="markets-section-heading">
              <span className="markets-eyebrow">
                QUALITY & COMPLIANCE
              </span>

              <h2>
                Our <span>Certifications</span>
              </h2>

              <p>
                Our certifications and regulatory registrations
                reflect our commitment to maintaining quality
                and meeting applicable export requirements.
              </p>
            </div>

            <div className="markets-certification-grid">
              <div className="markets-certification-card">
                <img
                  src="/images/US FDA.jpg"
                  alt="US FDA logo"
                />

                <h3>US FDA</h3>

                <p>
                  Food safety regulatory registration and compliance.
                </p>
              </div>

              <div className="markets-certification-card">
                <img
                  src="/images/MPEDA.png"
                  alt="MPEDA logo"
                />

                <h3>MPEDA</h3>

                <p>
                  Marine Products Export Development Authority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS CTA */}
        <section className="markets-cta">
          <div className="markets-cta-content">
            <span className="markets-section-label">
              LET'S CONNECT
            </span>

            <h2>
              Looking for a Reliable
              <br />
              <span>Indian Export Partner?</span>
            </h2>

            <p>
              Connect with Marshal Do Export to discuss your product
              requirements, sourcing needs, and international business
              opportunities.
            </p>

            <Link to="/contact" className="markets-primary-btn">
              Start a Business Enquiry
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
