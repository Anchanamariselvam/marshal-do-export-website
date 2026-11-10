import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  
const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const enquiryData = {
    fullName: formData.get("fullName"),
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    destination: formData.get("destination"),
    productCategory: formData.get("productCategory"),
    enquiryDetails: formData.get("enquiryDetails"),
  };

  try {
    const response = await fetch(
      "http://localhost:5000/api/enquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit enquiry.");
    }

    alert("Thank you! Your B2B enquiry has been submitted successfully.");

    form.reset();
  } catch (error) {
    console.error("Enquiry submission error:", error);

    alert(
      "Unable to submit your enquiry. Please try again later."
    );
  }
};


  return (
    <>
      <Header />

      <main className="contact-page">
        {/* CONTACT HERO */}
        <section className="contact-hero">
          <div className="contact-container">
            <span className="contact-eyebrow">
              START B2B TRADE RELATIONSHIP
            </span>

            <h1>
              Connect with Our <span>Export Office</span>
            </h1>

            <p>
              Ready to coordinate your global food procurement requirements?
              Reach our team for product specifications, export enquiries,
              and business partnerships.
            </p>
          </div>
        </section>

        {/* CONTACT DETAILS + ENQUIRY FORM */}
        <section className="contact-main-section">
          <div className="contact-container contact-layout">

            {/* LEFT SIDE */}
            <div className="contact-information">
              <div className="contact-section-heading">
                <span>GET IN TOUCH</span>
                <h2>Official Coordinates</h2>
              </div>

              <div className="contact-detail">
                <small>CHIEF COORDINATOR</small>
                <h3>AJAY MARSHAL RAJAMONI</h3>
              </div>

              <div className="contact-detail">
                <small>TELEPHONE CHANNELS</small>
                <p>
                  <a href="tel:+918946064498">+91 8946064498</a>
                  <span> | </span>
                  <a href="tel:+917598709500">+91-7598-70-9500</a>
                </p>
              </div>

              <div className="contact-detail">
                <small>EMAIL DESK</small>
                <p>
                  <a href="mailto:marshaldoexport@gmail.com">
                    Marshaldoexport@gmail.com
                  </a>
                </p>
              </div>

              <div className="contact-detail">
  <small>REGISTERED OFFICE ADDRESS</small>
  <p>
    17/61B, Palkulam, Anjugramam,
    Variyoor Post, Kanyakumari,
    Tamil Nadu – 629401, India
  </p>
</div>

              {/* GOOGLE MAP */}
              <div className="contact-map-card">
                <iframe
  title="Marshal Do Export Exact Company Location"
  src="https://maps.google.com/maps?q=17%2F61B%2C%20Palkulam%2C%20Anjugramam%2C%20Variyoor%20Post%2C%20Kanyakumari%2C%20Tamil%20Nadu%20629401%2C%20India&z=17&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>

                <div className="contact-map-caption">
  <h3>Marshal Do Export</h3>

  <p>
    17/61B, Palkulam, Anjugramam,
    Variyoor Post, Kanyakumari,
    Tamil Nadu – 629401, India
  </p>

  <a
    href="https://www.google.com/maps/search/?api=1&query=17%2F61B%2C%20Palkulam%2C%20Anjugramam%2C%20Variyoor%20Post%2C%20Kanyakumari%2C%20Tamil%20Nadu%20629401%2C%20India"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Company Location on Google Maps ↗
  </a>
              </div> {/* closes contact-map-caption */}
            </div> {/* closes contact-map-card */}
          </div> {/* closes contact-information */}

          {/* RIGHT SIDE - ENQUIRY FORM */}
          <div className="contact-form-card">
              <div className="contact-form-heading">
                <span>B2B BUSINESS ENQUIRIES</span>
                <h2>B2B Specification Enquiry Form</h2>
                <p>
                  Specify your destination port, targeted product category,
                  and required packing details.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Company legal name"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="corp@email.com"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 000 000 0000"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="destination">Destination Country</label>
                    <input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="E.g., Switzerland"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="productCategory">Product Category</label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      <option value="Deluxe Spices">Deluxe Spices</option>
                      <option value="Spices">Spices</option>
                      <option value="Rice">Rice</option>
                      <option value="Pulses & Lentils">Pulses & Lentils</option>
                      <option value="Dried Sea Foods">Dried Sea Foods</option>
                      <option value="Canned Fish">Canned Fish</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form-group contact-message-group">
                  <label htmlFor="enquiryDetails">
                    Your B2B Enquiry Details
                  </label>
                  <textarea
                    id="enquiryDetails"
                    name="enquiryDetails"
                    rows={5}
                    placeholder="Describe targeted volume requirements and destination port specifications..."
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-button">
                  Submit B2B Specification Request
                </button>
                </form>
            </div> {/* closes contact-form-card */}
          </div> {/* closes contact-layout */}
        </section> {/* closes contact-main-section */}
      </main>

      <Footer />
    </>
  );
}

export default Contact;