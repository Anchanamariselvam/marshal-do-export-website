
import { Link } from "react-router-dom";
import "./Footer.css";

const destinations = [
  "Brazil",
  "Canada",
  "Australia",
  "New Zealand",
  "Switzerland",
  "UK",
  "USA",
];

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-company">
            <Link className="brand footer-brand" to="/">
              <img
                className="brand-logo"
                src={`${import.meta.env.BASE_URL}images/marshal-logo.png`}
                alt="Marshal Do Export logo"
              />

              <span className="brand-copy">
                <strong>MARSHAL DO EXPORT</strong>
                <small>PREMIUM FOOD EXPORTS</small>
              </span>
            </Link>

            <p className="footer-description">
              Connecting premium Indian agricultural bounty to selective B2B
              markets globally. Established in Kanyakumari, Tamil Nadu,
              built on unwavering quality and client trust.
            </p>

            <div className="social-links" aria-label="Social media links">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v2.1H7v3.2h2.9V21h3.6Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11.5H3.5V9Zm5.5 0h3.3v1.6h.1a3.7 3.7 0 0 1 3.3-1.9c3.5 0 4.2 2.3 4.2 5.3v6.5h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9V9Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19.1 4.6 12 4.6 12 4.6s-7.1 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.9.5 8.9.5s7.1 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.3V8.7l5.8 3.3-5.8 3.3Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* PRODUCT CATEGORIES */}
          <div className="footer-column">
            <h3>PRODUCT CATEGORIES</h3>
            <Link to="/products">Deluxe Spices</Link>
            <Link to="/products">Spices</Link>
            <Link to="/products">Rice</Link>
            <Link to="/products">Pulses &amp; Lentils</Link>
            <Link to="/products">Dried Sea Foods</Link>
            <Link to="/products">Canned Fish</Link>
          </div>

          {/* EXPORT DESTINATIONS */}
          <div className="footer-column">
            <h3>EXPORT DESTINATIONS</h3>

            {destinations.map((destination) => (
              <Link to="/markets" key={destination}>
                {destination}
              </Link>
            ))}
          </div>

          {/* QUICK NAVIGATION */}
          <div className="footer-column">
            <h3>QUICK NAVIGATION</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/markets">Markets</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Marshal Do Export. All rights
            reserved.
          </p>

          <div>
            <span>Quality &amp; Compliance</span>
            <span>Global Port Logistics Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
