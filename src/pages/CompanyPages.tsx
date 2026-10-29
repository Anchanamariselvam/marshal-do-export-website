import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Mail,
  Package,
  Phone,
  ShieldCheck,
  Ship,
  X,
} from "lucide-react";
import {
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  categoryDescriptions,
  productCategories,
  products,
} from "../data/products";
import type { Product } from "../data/products";
import "./CompanyPages.css";

const categoryImages: Record<string, string> = {
  "Deluxe Spices":
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",
  Spices:
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=85",
  Rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=85",
  "Pulses and Lentils":
    "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=1000&q=85",
  "Dried Seafood":
    "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=1000&q=85",
  "Canned Fish":
    "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&w=1000&q=85",
};

const galleryItems = [
  {
    title: "Spice selection",
    category: "Spices",
    image: categoryImages["Deluxe Spices"],
  },
  {
    title: "Whole spices",
    category: "Spices",
    image: categoryImages.Spices,
  },
  {
    title: "Rice",
    category: "Rice and pulses",
    image: categoryImages.Rice,
  },
  {
    title: "Pulses and lentils",
    category: "Rice and pulses",
    image: categoryImages["Pulses and Lentils"],
  },
  {
    title: "Seafood",
    category: "Seafood",
    image: categoryImages["Dried Seafood"],
  },
  {
    title: "Canned fish",
    category: "Seafood",
    image: categoryImages["Canned Fish"],
  },
  {
    title: "Export logistics",
    category: "Logistics",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=85",
  },
];

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

function ImageFrame({ src, alt, className = "" }: ImageFrameProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <Package aria-hidden="true" size={34} />
        <span>Product image</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="inner-hero">
      <div className="container inner-hero-grid">
        <div className="inner-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
        <div className="inner-hero-image">
          <ImageFrame src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="company-section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Callout({
  title,
  text,
  link,
  linkText,
}: {
  title: string;
  text: string;
  link: string;
  linkText: string;
}) {
  return (
    <section className="section callout-section">
      <div className="container callout-card">
        <div>
          <span className="eyebrow">Talk with our team</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn--primary" to={link}>
          {linkText} <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Marshal Do Export"
        title="A thoughtful approach to food export enquiries"
        description="We present a range of food and agricultural products for international buyers, with clear communication around sourcing and export requirements."
        image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Agricultural products being prepared for distribution"
      />

      <section className="section">
        <div className="container about-company-grid">
          <div>
            <SectionHeading
              eyebrow="Company introduction"
              title="Connecting product enquiries with practical coordination"
            />
            <p>
              MARSHAL DO EXPORT presents Indian spices, rice, pulses and
              seafood products to business buyers. We welcome conversations
              about product selection, packing requirements and destination
              needs, then coordinate the relevant details with care.
            </p>
          </div>
          <div className="company-values">
            <article>
              <span className="values-icon"><Globe2 size={22} /></span>
              <h3>Our story</h3>
              <p>
                Our work brings a varied food and agricultural portfolio
                together in one place for buyers looking to start a sourcing
                conversation.
              </p>
            </article>
            <article>
              <span className="values-icon"><CheckCircle2 size={22} /></span>
              <h3>Our business approach</h3>
              <p>
                We focus on clear product enquiries, responsive communication
                and careful coordination of requirements shared by each buyer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Our purpose"
            title="Mission and vision"
            description="A buyer-focused approach to discussing food products and export requirements."
          />
          <div className="mission-cards">
            <article>
              <span className="values-icon"><ShieldCheck size={23} /></span>
              <h3>Our mission</h3>
              <p>
                To make product-sourcing enquiries clear and useful, and to
                respond to buyer requirements with professional care.
              </p>
            </article>
            <article>
              <span className="values-icon"><Globe2 size={23} /></span>
              <h3>Our vision</h3>
              <p>
                To build dependable business relationships through thoughtful
                communication and well-coordinated product enquiries.
              </p>
            </article>
            <article>
              <span className="values-icon"><Package size={23} /></span>
              <h3>Sourcing and quality</h3>
              <p>
                Product details are discussed with buyers and confirmed during
                enquiry coordination. Specific quality parameters are shared
                only when verified.
              </p>
            </article>
            <article>
              <span className="values-icon"><Ship size={23} /></span>
              <h3>Export coordination</h3>
              <p>
                Our team can discuss packaging coordination, destination needs
                and next steps based on the information in each enquiry.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container credentials-note">
          <ShieldCheck size={28} aria-hidden="true" />
          <div>
            <h2>Company references</h2>
            <p>
              Existing project content mentions US FDA and MPEDA. Applicable
              registrations and supporting documentation should be confirmed
              directly with the company; no certification claim is made here.
            </p>
          </div>
        </div>
      </section>

      <Callout
        title="Let’s discuss what you are looking for"
        text="Share your product and destination requirements with our team."
        link="/contact"
        linkText="Contact us"
      />
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="catalogue-card">
      <Link
        to={`/products/${product.slug}`}
        className="catalogue-card-image"
        aria-label={`View ${product.name} details`}
      >
        <ImageFrame src={product.image} alt={product.name} />
      </Link>
      <div className="catalogue-card-content">
        <span className="catalogue-category">{product.category}</span>
        <h2><Link to={`/products/${product.slug}`}>{product.name}</Link></h2>
        <p>{product.description}</p>
        <div className="catalogue-card-actions">
          <Link className="text-link" to={`/products/${product.slug}`}>
            View details <ArrowRight size={16} />
          </Link>
          <Link
            className="text-link"
            to={`/enquiry?product=${encodeURIComponent(product.slug)}`}
          >
            Enquire <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category") ?? "All";
  const selectedCategory = [
    "All",
    ...productCategories,
  ].includes(requestedCategory)
    ? requestedCategory
    : "All";
  const visibleProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  function chooseCategory(category: string) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="A catalogue for considered sourcing"
        description="Explore the product range and contact our team to discuss current options, product information and export requirements."
        image={categoryImages["Deluxe Spices"]}
        imageAlt="Spices presented for food sourcing"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Browse the range"
            description="Select a category to narrow the catalogue. Specific product specifications are confirmed during enquiry."
          />
          <div className="filter-list" role="group" aria-label="Filter products by category">
            {["All", ...productCategories].map((category) => (
              <button
                key={category}
                type="button"
                className="filter-button"
                aria-pressed={selectedCategory === category}
                onClick={() => chooseCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {visibleProducts.length > 0 ? (
            <div className="catalogue-grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="catalogue-empty">
              <Package size={28} aria-hidden="true" />
              <h2>{selectedCategory}</h2>
              <p>{categoryDescriptions[selectedCategory]}</p>
              <p>
                Product-specific items are not listed until details are
                confirmed.
              </p>
              <Link
                className="btn btn--primary"
                to={`/enquiry?product=${encodeURIComponent(selectedCategory)}`}
              >
                Ask about this category <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function ProductDetailsPage() {
  const { slug = "" } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="section unknown-product">
        <div className="container">
          <span className="eyebrow">Product not found</span>
          <h1>We could not find that product.</h1>
          <p>Browse the catalogue to see the products currently listed.</p>
          <Link className="btn btn--primary" to="/products">
            <ArrowLeft size={17} /> Back to products
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <>
      <section className="section product-detail-section">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <Link to="/products">Products</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="product-detail-layout">
            <div className="product-detail-photo">
              <ImageFrame src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-copy">
              <span className="catalogue-category">{product.category}</span>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>
                Contact us to confirm current availability, product
                information, packaging options and other requirements for your
                enquiry.
              </p>
              <div className="product-detail-actions">
                <Link
                  className="btn btn--primary"
                  to={`/enquiry?product=${encodeURIComponent(product.slug)}`}
                >
                  Enquire about this product <ArrowRight size={17} />
                </Link>
                <Link className="btn btn--outline" to="/products">
                  Back to catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {relatedProducts.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <SectionHeading
              eyebrow="Explore further"
              title="Related products"
              description={`More products listed in ${product.category}.`}
            />
            <div className="catalogue-grid related-grid">
              {relatedProducts.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product categories"
        title="Explore our product families"
        description="Browse the main categories represented in our food and agricultural product portfolio."
        image={categoryImages.Spices}
        imageAlt="Selection of spices"
      />
      <section className="section">
        <div className="container">
          <div className="category-overview-grid">
            {productCategories.map((category) => {
              const isCategoryOnly = !products.some(
                (product) => product.category === category,
              );
              const filterCategory =
                category === "Pulses and Lentils" ? category : category;
              return (
                <article className="overview-card" key={category}>
                  <Link
                    className="overview-card-image"
                    to={`/products?category=${encodeURIComponent(filterCategory)}`}
                    aria-label={`Browse ${category}`}
                  >
                    <ImageFrame
                      src={categoryImages[category]}
                      alt={`${category} products`}
                    />
                  </Link>
                  <div className="overview-card-body">
                    <h2>{category}</h2>
                    <p>{categoryDescriptions[category]}</p>
                    {isCategoryOnly && (
                      <p className="category-note">
                        Category-level information only; product varieties
                        have not been specified.
                      </p>
                    )}
                    <Link
                      className="text-link"
                      to={`/products?category=${encodeURIComponent(filterCategory)}`}
                    >
                      View category <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Spices", "Rice and pulses", "Seafood", "Logistics"];
  const shownItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at our product portfolio"
        description="Explore product and logistics imagery associated with the categories featured on this website."
        image={categoryImages["Pulses and Lentils"]}
        imageAlt="Pulses and lentils"
      />
      <section className="section">
        <div className="container">
          <div className="filter-list" role="group" aria-label="Filter gallery images">
            {filters.map((item) => (
              <button
                key={item}
                className="filter-button"
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {shownItems.map((item) => (
              <figure className="gallery-card" key={item.title}>
                <ImageFrame src={item.image} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function MarketsPage() {
  const steps = [
    {
      title: "Share your enquiry",
      description:
        "Tell us which product or category you are interested in and where your enquiry is based.",
    },
    {
      title: "Discuss requirements",
      description:
        "We can review product information, requested packaging and other requirements with you.",
    },
    {
      title: "Coordinate next steps",
      description:
        "Our team will discuss the relevant sourcing and export-coordination details for your request.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Export markets"
        title="International buyer enquiries, handled with care"
        description="We welcome international enquiries about our food and agricultural products and coordinate discussions around buyer requirements."
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Cargo containers at a shipping terminal"
      />
      <section className="section">
        <div className="container market-intro">
          <div>
            <SectionHeading
              eyebrow="International trade enquiries"
              title="Clear communication from first contact"
            />
            <p>
              Share the product you are sourcing, your destination-market
              requirements and any preferred packaging details. Our team can
              review the request and discuss the relevant next steps.
            </p>
          </div>
          <div className="market-icon-card">
            <Globe2 size={38} aria-hidden="true" />
            <p>
              We serve international buyer enquiries. No specific destinations
              or shipping routes are claimed on this page.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="A straightforward enquiry process"
          />
          <div className="process-grid">
            {steps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Callout
        title="Are you sourcing for an international market?"
        text="Send us the product and destination details so we can review your enquiry."
        link="/enquiry"
        linkText="Start an enquiry"
      />
    </>
  );
}

type EnquiryFormProps = {
  title: string;
  description: string;
  initialProduct?: string;
  showPackaging?: boolean;
};

function EnquiryForm({
  title,
  description,
  initialProduct = "",
  showPackaging = false,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const knownProducts = new Set(products.map((product) => product.slug));
  const selectedProduct = knownProducts.has(initialProduct) ? initialProduct : "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("error");
      return;
    }

    setStatus("error");
  }

  return (
    <div className="enquiry-form-card">
      <h2>{title}</h2>
      <p className="form-description">{description}</p>
      <p className="form-service-notice" role="note">
        This website does not currently have a connected form-submission
        service. Your information will not be sent from this form. Please email
        or call using the verified details on this page. A backend or trusted
        form provider must be connected before online submissions can be
        enabled.
      </p>
      {status === "error" && (
        <p className="form-error-message" role="alert">
          Your enquiry was not sent. Please contact us directly using the
          details provided.
        </p>
      )}
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="full-name">Full name <span aria-hidden="true">*</span></label>
          <input id="full-name" name="name" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="company-name">Company name</label>
          <input id="company-name" name="company" autoComplete="organization" />
        </div>
        <div className="form-field">
          <label htmlFor="email-address">Email address <span aria-hidden="true">*</span></label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone-number">Phone number</label>
          <input id="phone-number" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="country">Country <span aria-hidden="true">*</span></label>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="product-interest">
            Product of interest <span aria-hidden="true">*</span>
          </label>
          <select
            id="product-interest"
            name="product"
            defaultValue={selectedProduct}
            required
          >
            <option value="" disabled>Select a product</option>
            {productCategories.map((category) => (
              <optgroup key={category} label={category}>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name}
                    </option>
                  ))}
                {category === "Rice" || category === "Pulses and Lentils" ? (
                  <option value={category}>{category}</option>
                ) : null}
              </optgroup>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="quantity">Estimated quantity</label>
          <input id="quantity" name="quantity" />
        </div>
        {showPackaging && (
          <div className="form-field">
            <label htmlFor="packaging">Packaging requirements</label>
            <input id="packaging" name="packaging" />
          </div>
        )}
        <div className="form-field form-field--full">
          <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" rows={5} required />
        </div>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="form-submit-row">
          <button className="btn btn--primary" type="submit">
            Submit enquiry <ArrowRight size={17} />
          </button>
          <span>Fields marked * are required.</span>
        </div>
      </form>
    </div>
  );
}

function useInitialProduct() {
  const [searchParams] = useSearchParams();
  return searchParams.get("product") ?? "";
}

export function ContactPage() {
  return (
    <>
      <section className="inner-page-heading">
        <div className="container">
          <span className="eyebrow">Contact us</span>
          <h1>Tell us what you need</h1>
          <p>
            Send a product or export enquiry and include the details that will
            help our team understand your request.
          </p>
        </div>
      </section>
      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <div className="contact-details">
            <span className="eyebrow">Reach our coordinator</span>
            <h2>Contact information</h2>
            <p>Contact details currently provided by the company:</p>
            <div className="contact-detail">
              <span className="contact-detail-icon"><Phone size={20} /></span>
              <div>
                <h3>Telephone</h3>
                <a href="tel:+918946064498">+91 8946064498</a>
                <a href="tel:+917598709500">+91-7598-70-9500</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><Mail size={20} /></span>
              <div>
                <h3>Email</h3>
                <a href="mailto:Marshaldoexport@gmail.com">
                  Marshaldoexport@gmail.com
                </a>
              </div>
            </div>
            <p className="contact-coordinator">Coordinator: Ajay Marshal Rajamoni</p>
          </div>
          <EnquiryForm
            title="Send an enquiry"
            description="Please provide your contact and product details."
            initialProduct={useInitialProduct()}
          />
        </div>
      </section>
    </>
  );
}

export function EnquiryPage() {
  const initialProduct = useInitialProduct();

  return (
    <>
      <section className="inner-page-heading">
        <div className="container">
          <span className="eyebrow">Export enquiry</span>
          <h1>Request product information</h1>
          <p>
            Share your product, destination and packaging requirements with our
            team.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container enquiry-page-container">
          <EnquiryForm
            title="Buyer enquiry"
            description="Add as much detail as you have available; optional fields can be left blank."
            initialProduct={initialProduct}
            showPackaging
          />
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="section unknown-product">
      <div className="container">
        <span className="eyebrow">404 · Page not found</span>
        <h1>This page could not be found.</h1>
        <p>The page may have moved or the address may be incorrect.</p>
        <Link className="btn btn--primary" to="/">
          Return home <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function ImageLightboxCloseButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="lightbox-close"
      onClick={onClick}
      aria-label="Close image"
    >
      <X size={20} />
    </button>
  );
}
