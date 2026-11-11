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
          {/* COMPANY SECTION */}
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