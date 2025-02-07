import React, { useState } from "react";
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
import arrow from "../images/arrow.png";
import { MegaMenu } from "./MegaMenu";
import "../Css/Home.css";
import "../../src/style.css";
import { IoIosArrowDown } from "react-icons/io";
import { Footer } from "../Components/Footer";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 30px",
            gap: "5px",
          }}
        >
          <label style={{ fontSize: "12px" }}>
            Get $15 For Every $100 Spent
          </label>
          <IoIosArrowDown cursor={"pointer"} onClick={() => setIsOpen(true)} />
          <div
            style={{
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              color: "white",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></div>
        </div>

        {isOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              maxWidth: "1400px",
              width: "94%",
              height: "500px",
              backgroundColor: "white",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "20px",
              zIndex: 1000,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid black",
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "50%",
                fontSize: "16px",
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Main Wrapper */}

      <main className="main-wrapper">
        <MegaMenu />

        <section className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">GET CHANGED.</h1>
            <h1 className="banner-heading">STAY WARM.</h1>
            <p>Outdoor gear to keep you going. Any weather, anywhere.</p>
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
            <div className="image-grid">
              <div className="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" className="image-image" />
              </div>
              <div className="image-content">
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
              <div className="image-content">
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

            <div className="image-grid">
              <div className="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" className="image-image" />
              </div>
              <div className="image-content">
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

            <div className="image-grid">
              <div className="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" className="image-image" />
              </div>
              <div className="image-content">
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
            <div className="image-grid">
              <div className="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" className="image-image" />
              </div>
              <div className="image-content">
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
              <div className="image-content">
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

            <div className="image-grid">
              <div className="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" className="image-image" />
              </div>
              <div className="image-content">
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

            <div className="image-grid">
              <div className="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" className="image-image" />
              </div>
              <div className="image-content">
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

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(currentIndex + 1) * 25}%` }}
            ></div>
          </div>
        </section>

        <section className="about-trika-container">
          <img src="https://sportano.pl/blog/wp-content/uploads/2023/09/impregnacja-DWR-co-to-jest-i-jak-dziala.jpg" />

          <div className="about-trika">
            <p className="about-trika-heading">ABOUT TRIKA</p>
            <p className="trika-mission">
              Our mission is to create exceptional images while upholding our
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
            <p>click on the photos to buy images</p>
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
            <div class="image-grid">
              <div class="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" class="image-image" />
              </div>
              <div class="image-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="image-rating" />
              </div>
            </div>

            <div class="image-grid">
              <div class="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" class="image-image" />
              </div>
              <div class="image-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="image-rating" />
              </div>
            </div>

            <div class="image-grid">
              <div class="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" class="image-image" />
              </div>
              <div class="image-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="image-rating" />
              </div>
            </div>

            <div class="image-grid">
              <div class="image-card">
                <div className="heart-icon">
                  <img src={heart} alt="Heart Icon" />
                </div>
                <img src={bag} alt="image 2" class="image-image" />
              </div>
              <div class="image-content">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Running Shoes</p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="image-rating" />
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

        <Footer />
      </main>
    </div>
  );
};
