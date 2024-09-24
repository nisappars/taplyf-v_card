import React from "react";
import { FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

// Import local images
import companyLogo from "./images/u.png"; // Replace with your actual logo path
import nishanthImage from "./images/nishanth.jpg"; // Replace with actual image path
import viswadharshanImage from "./images/viswadharshan.png"; // Replace with actual image path

// TestimonialsCard Component
const TestimonialsCard = () => {
  const downloadVCard = (name, email, phone) => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:TapLyf
TEL;TYPE=CELL:${phone}
EMAIL:${email}
URL:https://taplyf-website.vercel.app/
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}-contact.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      {/* Company Info Section */}
      <div style={styles.companyInfo}>
        <div style={styles.logoWrapper}>
          <img
            src={companyLogo} // Use the imported local image for the company logo
            alt="Company Logo"
            style={styles.logo}
          />
        </div>
        {/* <h1 style={styles.companyName}>TapLyf</h1> */}
        <p style={styles.companyDescription}>
          At Taplyf, we are committed to revolutionizing the way payments are
          made by integrating cutting-edge NFC technology into everyday
          transactions. Our goal is to simplify and enhance the payment process
          across multiple sectors, including commuting, retail, and access
          control. With a focus on user convenience and security, we provide
          innovative solutions that make interactions smoother, faster, and more
          reliable. Taplyf is paving the way for the future of payments, making
          technology seamlessly adapt to real-world needs.
        </p>
        <div style={styles.companyIcons}>
          <a
            href="https://linkedin.com/company/taplyf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://taplyf-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaGlobe />
          </a>
          <a
            href="mailto:taplyf@gmail.com?subject=Inquiry&body=Hello,%0D%0A%0D%0AI would like to inquire about..."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div style={styles.cardsRow}>
        {/* Nishanth's Contact Card */}
        <div style={styles.card}>
          <div style={styles.imageWrapper}>
            <img
              src={nishanthImage}
              alt="Nishanth Arun .T"
              style={styles.image}
            />
          </div>
          <div style={styles.content}>
            <h3 style={styles.name}>Nishanth Arun T.</h3>
            <h4 style={styles.role}>Co-founder at TapLyf</h4>
            <div style={styles.cardIcons}>
              <a
                href="https://www.linkedin.com/in/nishanth-arun-t-bb3213253"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:t.nishantharun@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaEnvelope />
              </a>
            </div>
            <button
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#fff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#00f070")}
              onClick={() =>
                downloadVCard(
                  "Nishanth Arun T.",
                  "t.nishantharun@gmail.com",
                  "+91 9840428633"
                )
              }
            >
              Save Contact
            </button>
          </div>
        </div>

        {/* Viswadharshan's Contact Card */}
        <div style={styles.card}>
          <div style={styles.imageWrapper}>
            <img
              src={viswadharshanImage}
              alt="Viswadharshan .R.R"
              style={styles.image}
            />
          </div>
          <div style={styles.content}>
            <h3 style={styles.name}>Viswadharshan .R.R</h3>
            <h4 style={styles.role}>Co-founder at TapLyf</h4>
            <div style={styles.cardIcons}>
              <a
                href="https://www.linkedin.com/in/viswadarshan-r-r-68b8b124b"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:viswadarshanrramiya@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaEnvelope />
              </a>
            </div>
            <button
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#fff")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#00f070")}
              onClick={() =>
                downloadVCard(
                  "Viswadharshan .R.R",
                  "viswadarshanrramiya@gmail.com",
                  "+91 6380403325"
                )
              }
            >
              Save Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles with Media Queries and Custom Logo Zoom
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f4f7f9",
    width: "100%",
  },
  companyInfo: {
    display: "flex",
    flexDirection: "column", // Make sure child elements stack vertically
    alignItems: "center", // Center horizontally
    textAlign: "center",
    backgroundColor: "#000",
    padding: "20px",
    borderRadius: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
    color: "#fff",
    maxWidth: "100%",
  },
  logoWrapper: {
    overflow: "hidden", // To ensure the zoom effect stays within bounds
    display: "inline-block",
    borderRadius: "50%", // Keep the circular shape
    width: "120px",
    height: "120px",
    marginBottom: "1rem",
  },
  logo: {
    width: "100%", // Ensures the image fits the wrapper
    height: "100%",
    objectFit: "cover",
    objectPosition: "centre",
    clipPath: "circle(99%)",
    // eslint-disable-next-line no-dupe-keys
    objectPosition: "50% 30%", // Adjust to focus more on the upper part
    marginTop: "8px", // Use negative margin to shift the image down slightly

    transform: "scale(2.24)", // Default scale
    transition: "transform 0.5s ease-in-out", // Smooth transition for zoom
  },
  logoWrapperHover: {
    transform: "scale(1.2)", // Scale up on hover
  },
  companyName: {
    fontSize: "2rem",
    color: "#00f070",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  companyDescription: {
    fontSize: "1rem",
    color: "#fff",
  },
  companyIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  cardsRow: {
    display: "flex",
    justifyContent: "space-around",
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    overflow: "hidden",
    width: "100%",
    marginBottom: "2rem",
  },
  image: {
    width: "150px",
    height: "150px",
    marginBottom: "1rem",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top",
    clipPath: "circle(49%)",
  },
  content: {
    textAlign: "center",
  },
  name: {
    fontSize: "1.5rem",
    color: "#00f070",
    margin: "0",
    fontWeight: "bold",
  },
  role: {
    fontSize: "1rem",
    color: "#777",
    margin: "0 0 10px 0",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#00f070",
    color: "black",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  cardIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "10px",
  },
  icon: {
    color: "#00f070",
    fontSize: "1.5rem",
  },

  // Media Queries for Responsive Design
  "@media (max-width: 768px)": {
    companyName: {
      fontSize: "1.5rem",
    },
    companyDescription: {
      fontSize: "0.9rem",
    },
    cardsRow: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
};

export default TestimonialsCard;
