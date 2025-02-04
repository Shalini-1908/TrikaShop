import React, { useState, useEffect } from "react";
import { MegaMenu } from "./MegaMenu";
import "../Css/Product.css";
import pdp1 from "../images/pdp1.png";
import phone from "../images/phone.png";
import email from "../images/email.png";
import pinterest from "../images/pinterest.png";
import insta from "../images/insta.png";
import youtube from "../images/yt.png";
import arrow from "../images/arrow.png";
import bag from "../images/bagpack.png";
import heart from "../images/heart.png";
import stars from "../images/stars.png";
import pickup from "../images/pickup.png";
import delivery from "../images/delivery.png";
import { Accordion } from "./Accordian";
import { FaChevronDown } from "react-icons/fa6";
import "../../src/style.css";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";

export const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const smallaccordian = [
    {
      title: "Product Details",
      content: (
        <>
          <p>
            The Women's Box Logo Hoodie delivers soft, versatile comfort in a
            classic go-anywhere design, with mobility-focused raglan sleeves and
            a spacious front kangaroo pocket.
          </p>
          <ul>
            <li>Material: 80% Cotton, 20% Polyester</li>
            <li>Available in multiple sizes and colors</li>
          </ul>
        </>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <>
          <p>
            We offer free shipping on all orders above $50. Returns are accepted
            within 30 days of purchase.
          </p>
          <ul>
            <li>Standard shipping: 5-7 business days</li>
            <li>Express shipping: 2-3 business days</li>
          </ul>
        </>
      ),
    },
  ];

  const bigaccordian = [
    {
      title: "Product Description",
      content: (
        <>
          <p>
            The Women's Box Logo Hoodie delivers soft, versatile comfort in a
            classic go-anywhere design, with mobility-focused raglan sleeves and
            a spacious front kangaroo pocket,this will quickly become your
            favorite layer to relax (or explore) in. Plus, it's made using at
            least 74% Climate Conscious Cotton grown by U.S farmers practicing
            regenrative agriculture.
          </p>
          <ul>
            <p>Features</p>
            <li>
              Body Fabric Made With 74% U.S. Cotton From Farmers Using
              Agricultural Practices That Help Build Soil Carbon; Rib Made With
              96%
            </li>
            <li>Kangaroo Hand Pocket</li>
            <li>No-Hand, Water-Based, Screen-Printed Box Logo On Left Chest</li>
            <li>Raglan Sleeves For Increased Mobility</li>
            <li>Rib On Cuffs And Hem</li>
            <li>Standard Fit</li>
            <li>Two-Piece Hood With A Drwacord For Adjustability</li>
          </ul>
        </>
      ),
    },
    {
      title: "Specifications",
      content: (
        <>
          <h5>Style:</h5>
          <p>NFOABAWC</p>

          <h5>Body:</h5>
          <p>250 G/M 74% Climate Conscious Cotton 26% Polyster</p>

          <h5>Rib:</h5>
          <p>330 G/M 96% Climate Conscious Cotton 4% Elastane</p>

          <h5>Sizes:</h5>
          <p>XS, S, M, XL, XXL, 3XL</p>

          <h5>Center Back:</h5>
          <p>25.25</p>
        </>
      ),
    },
  ];

  return (
    <div className="pdp-wrapper">
      {/* Offer */}
      <section className="offer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 30px",
            gap: "5px",
          }}
        >
          <label htmlFor="help" style={{ fontSize: "12px" }}>
            Get $15 For Every $100 Spent
          </label>
          <select
            style={{
              width: "20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
            id="help"
          >
            <option value="help-center"></option>
            <option value="contact-us">Contact Us</option>
          </select>
        </div>
      </section>
      {/* Megamenu */}

      <div className="main-wrapper">
        <MegaMenu />
        <div className="border-partition"></div>

        {/* Breadcrumb */}
        <section></section>

        {/* Product Container */}
        <section className="product-container">
          <div className="product-main">
            <img src={pdp1} alt="Product" className="product-main-img" />
            <div className="product-thumbnails">
              <img src={pdp1} alt="Thumbnail 1" className="thumbnail" />
              <img src={pdp1} alt="Thumbnail 2" className="thumbnail" />
            </div>
            <div className="product-thumbnails">
              <img src={pdp1} alt="Thumbnail 1" className="thumbnail" />
              <img src={pdp1} alt="Thumbnail 2" className="thumbnail" />
            </div>
          </div>
          <div className="product-content">
            <a href="#">NorthFace</a>
            <p className="product-name">
              Women's Evolution V-Neck Sweatshirt Heritage Patch Pullover Hoodie
            </p>
            <div className="rating">
              <img src={stars} />
              <span> (570)</span>
              <p>|</p>
              <a href="#">28 reviews</a>
            </div>
            <div className="product-price-container">
              <p className="product-price">$120.00</p>
              <span className="old-price">$22.20</span>
            </div>

            <p className="saved-price">You save $10.91</p>

            <h4>Color: Sky Blue</h4>

            <div className="color-options">
              <div
                className="color-circle"
                style={{ backgroundColor: "#7f9cb9" }}
              ></div>

              <div
                className="color-circle"
                style={{ backgroundColor: "#ff9b53" }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: "#262628" }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: "#b11f32" }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: "#5d7b9f" }}
              ></div>
              <div
                className="color-circle"
                style={{ backgroundColor: "#c79999" }}
              ></div>
            </div>

            <div className="select-size">
              <p>Size:Please Select</p>
              <a href="#">View Size Chart</a>
            </div>
            <div className="sizes-box">
              {["S", "M", "L", "XL"].map((size, index) => (
                <div key={index} className="size-option">
                  {size}
                </div>
              ))}
            </div>

            <div className="expected-date">
              <div className="pickup">
                <div className="expected-date-icon">
                  <img src={pickup} alt="Pickup Icon" />
                  <p>Pickup</p>
                </div>
                <p>Ready within 2 hours</p>
              </div>
              <div className="delivery">
                <div className="expected-date-icon">
                  <img src={delivery} alt="Delivery Icon" />
                  <p>Delivery</p>
                </div>
                <p>Ready within 2 hours</p>
              </div>
            </div>

            <div className="pickup-location">
              <p>Pickup at Sacramento</p>
              <a href="#">Change Store</a>
            </div>

            <p className="left-quantity">Only 1 Left</p>

            <div className="cart-container">
              <div className="quantity">
                <div className="number">
                  <GoPlus color="gray" />
                  <p>1</p>
                  <HiMinus color="#929292" />
                </div>
              </div>
              <div className="add-to-cart">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>

            <div className="border-partition2"></div>

            <Accordion smallaccordian={smallaccordian} />

            <section className="complete-look-container">
              <div className="complete-look-content">
                <div className="complete-look-heading-container">
                  <h1 className="complete-look-heading">Complete Your Look</h1>
                  <div className="complete-look-text">
                    <ul>
                      <li>NEW ARRIVALS</li>
                      <li>JACKETS</li>
                      <li>SHOES</li>
                      <li>BAGS & GEAR</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="arrow-container">
                  <button
                    className="arrow-btn"
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                  >
                    <img src="./left-chevron.png" alt="Previous" />
                  </button>
                  <button
                    className="arrow-btn"
                    onClick={nextSlide}
                    aria-label="Next Slide"
                  >
                    <img src="./right-chevron.png" alt="Next" />
                  </button>
                </div>
              </div>

              <div className="complete-look-images">
                <div className="complete-look-image-grid">
                  <div className="complete-look-image-card">
                    <div className="heart-icon">
                      <img src={heart} alt="Heart Icon" />
                    </div>
                    <img
                      src={bag}
                      alt="image 2"
                      className="complete-look-image"
                    />
                  </div>
                  <div className="complete-look-image-content">
                    <p className="brand-name">Nike</p>
                    <p className="product-name">Men's Running Shoes</p>
                    <p>$120.00</p>
                    <img src={stars} alt="Rating" className="image-rating" />
                  </div>
                </div>

                <div className="image-grid">
                  <div className="image-card">
                    <div className="heart-icon">
                      <img src={heart} alt="Heart Icon" />
                    </div>
                    <img src={bag} alt="image 2" className="image-image" />
                  </div>
                  <div className="complete-look-image-content">
                    <div className="product-color-options">
                      <div
                        className="product-color-circle"
                        style={{ backgroundColor: "#7f9cb9" }}
                      ></div>
                      <div
                        className="product-color-circle"
                        style={{ backgroundColor: "#262628" }}
                      ></div>
                      <div
                        className="product-color-circle"
                        style={{ backgroundColor: "#b79a7a" }}
                      ></div>
                      <div
                        className="product-color-circle"
                        style={{ backgroundColor: "#f4ede6" }}
                      ></div>
                      <div
                        className="product-color-circle"
                        style={{ backgroundColor: "#c79999" }}
                      ></div>
                    </div>
                    <p className="brand-name">Nike</p>
                    <p className="product-name">Men's Running Shoes</p>
                    <p>$120.00</p>
                    <img src={stars} alt="Rating" className="image-rating" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/*big accordian */}
        <section className="big-accordian">
          {/* <Accordion items={items} /> */}

          <h2>About this item</h2>

          <div className="about-accordion">
            {bigaccordian.map((item, index) => (
              <div key={index} className="about-accordion-item">
                <div
                  className="about-accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <FaChevronDown
                    className={`chevron-lg ${
                      openIndex === index ? "rotate" : ""
                    }`}
                    size={20}
                    color={"black"}
                  />
                </div>
                <div
                  className={`about-accordion-content ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="might-like-container">
          <div className="might-like-content">
            <div className="might-like-heading-container">
              <h2 className="might-like-heading">You Might Also Like</h2>
            </div>
            <div className="arrow-container">
              <button
                className="arrow-btn"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                <img src="./left-chevron.png" alt="Previous" />
              </button>
              <button
                className="arrow-btn"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                <img src="./right-chevron.png" alt="Next" />
              </button>
            </div>
          </div>

          <div className="might-like-images">
            <div class="product-grid">
              <div class="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" class="product-image" />
              </div>
              <div class="product-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="product-rating" />
              </div>
            </div>

            <div class="product-grid">
              <div class="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" class="product-image" />
              </div>
              <div class="product-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="product-rating" />
              </div>
            </div>

            <div class="product-grid">
              <div class="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" class="product-image" />
              </div>
              <div class="product-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="product-rating" />
              </div>
            </div>

            <div class="product-grid">
              <div class="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" class="product-image" />
              </div>
              <div class="product-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="product-rating" />
              </div>
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(currentIndex + 1) * 25}%` }}
            ></div>
          </div>
        </section>

        <section className="join-trika">
          <p>JOIN TRIKA AND GET 15% OFF</p>
          <span>
            <div className="join-search-container">
              <div className="join-search-wrapper">
                <input
                  type="text"
                  className="join-search"
                  placeholder="Enter Your Email"
                />
                <img src={arrow} alt="Submit" />
              </div>
            </div>
          </span>
        </section>
      </div>
      <footer>
        <div className="footer-columns">
          <div className="footer-column">
            <ul>
              <h4>SHOP</h4>
              <li>Footwear</li>
              <li>Clothing</li>
              <li>Accessories</li>
              <li>Sale</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <h4>BRAND</h4>
              <li>History</li>
              <li>Media</li>
              <li>Affiliate Program</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <h4>HELP</h4>
              <li>Order Status</li>
              <li>Return Policy & Information</li>
              <li>Sizing</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>CONTACT US</h4>
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

          <div className="footer-column">
            <div className="privacy">
              <span>
                <p>2024 Trika Technologies</p>
                <p>Privacy Policy </p>
                <p>|</p>
                <p>Terms Of Use</p>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
