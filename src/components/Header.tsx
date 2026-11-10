import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shared-header">
      <div className="shared-header-inner">
        <Link to="/" className="shared-brand" onClick={closeMenu}>
          <img
            src="/images/marshal-logo.png"
            alt="Marshal Do Export logo"
            className="shared-brand-logo"
          />

          <span className="shared-brand-copy">
            <strong>MARSHAL DO EXPORT</strong>
            <small>PREMIUM FOOD EXPORTS</small>
          </span>
        </Link>

        <button
          className="shared-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`shared-nav ${menuOpen ? "shared-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/markets" onClick={closeMenu}>
            Markets
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="shared-enquiry-button"
            onClick={closeMenu}
          >
            Send an Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;