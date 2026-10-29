import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { socialLinks } from "../config/socialLinks";

type SocialName = (typeof socialLinks)[number]["name"];

function SocialIcon({ name }: { name: SocialName }) {
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9h3.6v11H3.4V9Zm5.8 0h3.5v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V20h-3.6v-5.2c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V20H9.2V9Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

const categories = [
  { label: "Deluxe Spices", path: "/products?category=Deluxe%20Spices" },
  { label: "Spices", path: "/products?category=Spices" },
  { label: "Rice", path: "/products?category=Rice" },
  { label: "Pulses and Lentils", path: "/products?category=Pulses%20and%20Lentils" },
  { label: "Dried Seafood", path: "/products?category=Dried%20Seafood" },
  { label: "Canned Fish", path: "/products?category=Canned%20Fish" },
];

const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "Gallery", path: "/gallery" },
  { label: "Export Markets", path: "/markets" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-company">
            <Link to="/" className="footer-brand">
              <span className="footer-logo">MDE</span>
              <span>MARSHAL DO EXPORT</span>
            </Link>

            <p className="footer-description">
              Connecting premium Indian food and agricultural products with
              international B2B markets through clear communication,
              professional coordination and dependable export enquiries.
            </p>

            <section className="footer-social" aria-labelledby="footer-social-title">
              <h3 id="footer-social-title">Connect With Us</h3>
              <div className="footer-social-links">
                {socialLinks.map(({ name, url }) => {
                  const label = `Visit Marshal Do Export on ${name}`;

                  return url ? (
                    <a
                      key={name}
                      className="footer-social-link"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <SocialIcon name={name} />
                    </a>
                  ) : (
                    <span
                      key={name}
                      className="footer-social-link footer-social-link--unconfigured"
                      role="img"
                      aria-label={`${name} profile link not configured`}
                      title={`Add the company ${name} profile URL in src/config/socialLinks.ts`}
                    >
                      <SocialIcon name={name} />
                    </span>
                  );
                })}
              </div>
            </section>

          </div>

          <div className="footer-column">
            <h3>PRODUCT CATEGORIES</h3>
            {categories.map((category) => (
              <Link key={category.path} to={category.path} className="footer-link">
                {category.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h3>QUICK NAVIGATION</h3>
            {navigation.map((item) => (
              <Link key={item.path} to={item.path} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h3>ENQUIRIES</h3>
            <Link to="/enquiry" className="footer-link">
              Product enquiry
            </Link>
            <Link to="/contact" className="footer-link">
              Contact form
            </Link>
            <Link to="/markets" className="footer-link">
              Export markets
            </Link>
          </div>

          <div className="footer-column footer-contact-column">
            <h3>CONTACT US</h3>
            <a className="footer-contact-link" href="tel:+918946064498">
              <Phone size={15} />
              +91 8946064498
            </a>
            <a className="footer-contact-link" href="tel:+917598709500">
              <Phone size={15} />
              +91-7598-70-9500
            </a>
            <a className="footer-contact-link" href="mailto:Marshaldoexport@gmail.com">
              <Mail size={15} />
              Marshaldoexport@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Marshal Do Export. All rights reserved.</p>
          <p>Connecting Indian Products with Global Markets</p>
        </div>
      </div>
    </footer>
  );
}