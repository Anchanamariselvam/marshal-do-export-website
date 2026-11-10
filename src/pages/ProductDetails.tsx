
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "./Products";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="product-details-page">
        <Header />

        <main className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you are looking for is unavailable.</p>

          <Link to="/products" className="product-back-button">
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const suggestedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.slug !== product.slug
    )
    .slice(0, 4);

  return (
    <div className="product-details-page">
      <Header />

      <main>
        {/* BREADCRUMB */}
        <section className="product-details-breadcrumb">
          <div className="product-details-container">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <section className="product-details-main">
          <div className="product-details-container">
            <div className="product-details-layout">
              {/* PRODUCT IMAGE */}
              <div className="product-details-image-wrapper">
                <div className="product-details-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <p className="product-image-caption">
                  MARSHAL DO EXPORT · PREMIUM FOOD EXPORTS
                </p>
              </div>

              {/* PRODUCT INFORMATION */}
              <div className="product-details-content">
                <p className="product-details-category">
                  {product.category.toUpperCase()}
                </p>

                <h1>{product.name}</h1>

                {product.subtitle && (
                  <h2 className="product-details-subtitle">
                    {product.subtitle}
                  </h2>
                )}

                <div className="product-details-divider" />

                <p className="product-details-intro">
                  Discover our {product.name.toLowerCase()} selection,
                  sourced and presented for international B2B markets.
                  Contact our team for product specifications and
                  export enquiries.
                </p>

                <div className="product-description-heading">
                  <h3>Product Description</h3>
                </div>

                <ul className="product-description-list">
                  {product.description.map((description, index) => (
                    <li key={index}>
                      <CheckCircle2 size={17} />
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>

                <div className="product-details-buttons">
                  <Link
                    to="/contact"
                    className="product-details-enquiry-button"
                  >
                    Send Business Enquiry
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/products"
                    className="product-details-back-link"
                  >
                    <ArrowLeft size={16} />
                    Browse Products
                  </Link>
                </div>

                <div className="product-details-trust">
                  <span>International B2B Supply</span>
                  <span>Quality-Focused Sourcing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUGGESTED PRODUCTS */}
        {suggestedProducts.length > 0 && (
          <section className="suggested-products-section">
            <div className="product-details-container">
              <div className="suggested-products-heading">
                <div>
                  <p className="suggested-products-label">
                    EXPLORE MORE
                  </p>

                  <h2>Suggested Products</h2>

                  <p>
                    Discover more products from the {product.category}
                    category.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="suggested-view-all"
                >
                  View All Products
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="suggested-products-grid">
                {suggestedProducts.map((suggested) => (
                  <article
                    className="suggested-product-card"
                    key={suggested.slug}
                  >
                    <Link
                      to={`/products/${suggested.slug}`}
                      className="suggested-product-image"
                    >
                      <img
                        src={suggested.image}
                        alt={suggested.name}
                        loading="lazy"
                      />
                    </Link>

                    <div className="suggested-product-content">
                      <p>{suggested.category.toUpperCase()}</p>

                      <h3>{suggested.name}</h3>

                      <Link
                        to={`/products/${suggested.slug}`}
                        className="suggested-product-link"
                      >
                        View Details
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails;
