import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "Gallery", path: "/gallery" },
  { label: "Export Markets", path: "/markets" },
  { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Marshal Do Export home">
          <div className="brand-logo">
            <img
              src="/images/logo-placeholder.png"
              alt="Marshal Do Export logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="brand-logo-fallback">MDE</span>
          </div>

          <div className="brand-copy">
            <span className="brand-name">MARSHAL DO EXPORT</span>
            <span className="brand-tagline">PREMIUM FOOD EXPORT · INDIA</span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`main-navigation ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/contact" className="btn btn--primary header-cta" onClick={closeMenu}>
            Send an Enquiry
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}