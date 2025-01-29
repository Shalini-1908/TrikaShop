import React, { useState, useEffect } from "react";
import sleepingbags from "../images/sleeping-bags.jpg";
import shoppacks from "../images/shop-packs.jpg";
import rainwear from "../images/rainwear.jpg";
import bestseller from "../images/bestsellers.png";
import surfing from "../images/surfing_lessons.jpg";
import boots from "../images/boots.jpg";
import gymfit from "../images/gym-fit.jpg";
import packaging from "../images/packaging.png";
import bag from "../images/bagpack.png";
import heart from "../images/heart.png";
import instagram from "../images/instagram.png";
import dollar from "../images/dollar.png";
import verified from "../images/verify.png";
import stars from "../images/stars.png";
import community1 from "../images/trika_com1.jpg";
import community2 from "../images/trika_com2.jpg";
import community3 from "../images/trika_com3.jpg";
import community4 from "../images/trika_com4.jpg";
import community5 from "../images/trika_com5.jpg";
import community6 from "../images/trika_com6.jpg";
import phone from "../images/phone.png";
import email from "../images/email.png";
import pinterest from "../images/pinterest.png";
import insta from "../images/insta.png";
import youtube from "../images/yt.png";
import arrow from "../images/arrow.png";

import "./Home.css";
import MegaMenu from "./MegaMenu";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  return (
    <div className="container">
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

      {/* Main Wrapper */}

      <main className="main-wrapper">
        <MegaMenu />

        <section className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">GET CHANGED.</h1>
            <h1 className="banner-heading">STAY WARM.</h1>
            <p>Outdoor gear to keep you going.Any weather, anywhere</p>
            <a href="#shop-now" className="banner-button">
              Shop Now
            </a>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="carousel-container">
          <div className="carousel-content">
            <div className="text-container">
              <h1 className="carousel-heading">EVERY SIDE OF STRONG</h1>
              <p className="carousel-subheading">
                Lorem lpsum Dolor Sit Amet, Consectetur Adipiscing Elit
              </p>
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

          <div className="carousel-images">
            <img
              src={sleepingbags}
              alt="Sleeping Bags"
              className={`carousel-image ${currentIndex === 0 ? "active" : ""}`}
            />
            <img
              src={shoppacks}
              alt="Shop Packs"
              className={`carousel-image ${currentIndex === 1 ? "active" : ""}`}
            />
            <img
              src={rainwear}
              alt="Rainwear"
              className={`carousel-image ${currentIndex === 2 ? "active" : ""}`}
            />
            <img
              src={bestseller}
              alt="Best Sellers"
              className={`carousel-image ${currentIndex === 3 ? "active" : ""}`}
            />
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(currentIndex + 1) * 25}%` }}
            ></div>
          </div>
        </section>
        {/* Hiking */}
        <section className="hiking">
          <div className="hiking-content">
            <h1 className="hiking-heading">PACK IN THE ADVENTURE.</h1>

            <p>
              With room for water,snacks and extra layers,these hiking jackets
              are tried and trusted for the trails ahead
            </p>
            <a href="#shop-now" className="banner-button">
              Shop Hkiing Gears
            </a>
          </div>
        </section>
        {/* For your next adventure */}
        <section className="featured-carousel-container">
          <div className="featured-carousel-content">
            <div className="featured-heading-container">
              <h1 className="featured-carousel-heading">
                FOR YOUR NEXT ADVENTURE
              </h1>
              <div className="featured-carousel-text">
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

          <div className="featured-carousel-images">
            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <div className="color-options">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7f9cb9" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#262628" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#b79a7a" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#f4ede6" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#c79999" }}
                  ></div>
                </div>
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <div className="color-options">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7f9cb9" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#262628" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#b79a7a" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#f4ede6" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#c79999" }}
                  ></div>
                </div>
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <div className="color-options">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7f9cb9" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#262628" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#b79a7a" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#f4ede6" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#c79999" }}
                  ></div>
                </div>
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(currentIndex + 1) * 25}%` }}
            ></div>
          </div>
        </section>

        <section className="featured-carousel-container">
          <div className="featured-carousel-content">
            <div className="featured-heading-container">
              <h1 className="featured-carousel-heading">FEATURED</h1>
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

          <div className="featured-carousel-images">
            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <div className="color-options">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7f9cb9" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#262628" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#b79a7a" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#f4ede6" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#c79999" }}
                  ></div>
                </div>
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <div className="color-options">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7f9cb9" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#262628" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#b79a7a" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#f4ede6" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#c79999" }}
                  ></div>
                </div>
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="Product 2" className="product-image" />
              </div>
              <div className="product-content">
                <div className="color-options">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#7f9cb9" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#262628" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#b79a7a" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#f4ede6" }}
                  ></div>
                  <div
                    className="color-circle"
                    style={{ backgroundColor: "#c79999" }}
                  ></div>
                </div>
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" className="product-rating" />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(currentIndex + 1) * 25}%` }}
            ></div>
          </div>
        </section>

        <section className="about-trika-container">
          <div>
            <img src="https://sportano.pl/blog/wp-content/uploads/2023/09/impregnacja-DWR-co-to-jest-i-jak-dziala.jpg" />
          </div>
          <div className="about-trika">
            <p className="about-trika-heading">ABOUT TRIKA</p>
            <p className="trika-mission">
              Our mission is to create exceptional products while upholding our
              responsibility towards Mother Nature,our communities,and the
              future ahead
            </p>
            <div className="">
              <button>Read Our Story</button>
            </div>
          </div>
        </section>

        <section className="community-container">
          <div className="community-heading-container">
            <div className="insta-icon">
              <img src={instagram} alt="insta Icon" />
            </div>
            <h1 className="community-heading">TRIKA COMMUNITY</h1>
          </div>

          <div className="trika-community-text">
            <p>
              mention @Trika on instagram for a chance to have your look
              featured in our website, you'll receive an exclusive gift and
              Trika Club points
            </p>
          </div>

          <div className="community-images">
            <img
              src={community1}
              alt="Sleeping Bags"
              className="community-image"
            />
            <img
              src={community2}
              alt="Shop Packs"
              className="community-image"
            />
            <img src={community3} alt="Rainwear" className="community-image" />
            <img
              src={community4}
              alt="Best Sellers"
              className="community-image"
            />
            <img
              src={community5}
              alt="Best Sellers"
              className="community-image"
            />
            <img
              src={community6}
              alt="Best Sellers"
              className="community-image"
            />
          </div>

          <div className="buy-photos">
            <p>click on the photos to buy products</p>
            <button>Shop Our Instagram</button>
          </div>
        </section>

        <section className="why-shop-container">
          <div className="why-shop-content">
            <div className="why-shop-heading-container">
              <h1 className="why-shop-carousel-heading">WHY SHOP AT TRIKA?</h1>
            </div>
            <div className="shop-columns">
              <div className="shop-column">
                <img src={packaging} />
                <ul>
                  <h5>FREE DELIVERY</h5>
                  <li>Complimentory Delivery</li>
                  <li>On Every Single Order.</li>
                </ul>
              </div>
              <div className="shop-column">
                <img src={dollar} />
                <ul>
                  <h5>MONEY-BACK GUARANTEE</h5>
                  <li>Free Returns And</li>
                  <li>Exchanges</li>
                </ul>
              </div>
              <div className="shop-column">
                <img src={verified} />
                <ul>
                  <h5>SHOP WITH AN EXPERT</h5>
                  <li>Call 80 34 888 4323 Or</li>
                  <li>Chat To Have Your Question</li>
                  <li>Answered.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="stories-carousel-container">
          <div className="stories-heading-container">
            <h1 className="stories-carousel-heading">STORIES</h1>
            <button>View Our Blog</button>
          </div>

          <div className="stories-carousel-grid">
            <div className="stories-item">
              <img
                src={surfing}
                alt="surfing"
                className="stories-carousel-image"
              />
              <div className="stories-carousel-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <button>Read More</button>
            </div>

            <div className="stories-item">
              <img src={boots} alt="boots" className="stories-carousel-image" />
              <div className="stories-carousel-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <button>Read More</button>
            </div>

            <div className="stories-item">
              <img
                src={gymfit}
                alt="gymfit"
                className="stories-carousel-image"
              />
              <div className="stories-carousel-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <button>Read More</button>
            </div>
          </div>
        </section>

        <section className="recently-carousel-container">
          <div className="recently-carousel-content">
            <div className="recently-heading-container">
              <h1 className="recently-carousel-heading">RECENTLY VIEWED</h1>
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

          <div className="recently-carousel-images">
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

          {/* Progress Bar */}
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
      </main>
    </div>
  );
};

export default Home;
