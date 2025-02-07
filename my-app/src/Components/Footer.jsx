import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import phone from "../images/phone.png";
import email from "../images/email.png";
import pinterest from "../images/pinterest.png";
import insta from "../images/insta.png";
import youtube from "../images/yt.png";
import "../Css/Footer.css";

export const Footer = () => {
  const [openSections, setOpenSections] = useState({ shop: true });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenSections({ shop: true, brand: true, help: true, contact: true });
      } else {
        setOpenSections({ shop: true, contact: true });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    if (window.innerWidth <= 768) {
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  return (
    <footer>
      <div className="footer-columns">
        {/* Column 1: Shop */}
        <div className={`footer-column ${openSections.shop ? "active" : ""}`}>
          <h4 onClick={() => toggleSection("shop")}>
            SHOP
            {openSections.shop ? (
              <FaChevronUp className="arrow" />
            ) : (
              <FaChevronDown className="arrow" />
            )}
          </h4>
          {openSections.shop && (
            <ul>
              <li>Footwear</li>
              <li>Clothing</li>
              <li>Accessories</li>
              <li>Sale</li>
              <li>New Arrivals</li>
            </ul>
          )}
        </div>

        {/* Column 2: Brand */}
        <div className={`footer-column ${openSections.brand ? "active" : ""}`}>
          <h4 onClick={() => toggleSection("brand")}>
            BRAND
            {openSections.brand ? (
              <FaChevronUp className="arrow" />
            ) : (
              <FaChevronDown className="arrow" />
            )}
          </h4>
          {openSections.brand && (
            <ul>
              <li>History</li>
              <li>Media</li>
              <li>Affiliate Program</li>
              <li>Store Locator</li>
            </ul>
          )}
        </div>

        {/* Column 3: Help */}
        <div className={`footer-column ${openSections.help ? "active" : ""}`}>
          <h4 onClick={() => toggleSection("help")}>
            HELP
            {openSections.help ? (
              <FaChevronUp className="arrow" />
            ) : (
              <FaChevronDown className="arrow" />
            )}
          </h4>
          {openSections.help && (
            <ul>
              <li>Order Status</li>
              <li>Return Policy & Information</li>
              <li>Sizing</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          )}
        </div>

        {/* Column 4: Contact Us */}
        <div
          className={`footer-column ${openSections.contact ? "active" : ""}`}
        >
          <h4 onClick={() => toggleSection("contact")}>
            CONTACT US
            {openSections.contact ? (
              <FaChevronUp className="arrow" />
            ) : (
              <FaChevronDown className="arrow" />
            )}
          </h4>
          {openSections.contact && (
            <div>
              <div className="footer-icon-container">
                <div className="contact-item">
                  <img src={phone} className="contact-icon1" alt="Phone" />
                  <span>
                    <p>1800-102-8243</p>
                    <p>
                      <i>Monday-Saturday from (9AM-6PM)</i>
                    </p>
                  </span>
                </div>
                <div className="contact-item">
                  <img src={email} className="contact-icon2" alt="Email" />
                  <span>
                    <p>support@trikatechnologies.com</p>
                  </span>
                </div>
              </div>

              <div className="social-media">
                <img src={insta} alt="Instagram" />
                <img src={pinterest} alt="Pinterest" />
                <img src={youtube} alt="YouTube" />
              </div>
            </div>
          )}
        </div>

        {/* Privacy & Copyright Section */}
        <div className="footer-columnprivacy">
          <div className="privacy">
            <span>
              <p>2024 Trika Technologies</p>
              <p>Privacy Policy | Terms of Use</p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
