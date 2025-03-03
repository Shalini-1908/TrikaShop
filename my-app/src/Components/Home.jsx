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
import { ProgressBar } from "../Components/ProgressBar";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //states for progressbar ->
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [recentlyViewedIndex, setRecentlyViewedIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <header aria-describedby="discount-header" className="discount-header">
        <label>Get $15 For Every $100 Spent</label>
        <IoIosArrowDown cursor={"pointer"} onClick={() => setIsOpen(true)} />
      </header>

      {isOpen && (
        <dialog className="shipping" aria-haspopup="dialog">
          <button onClick={() => setIsOpen(false)}>✕</button>
        </dialog>
      )}

      <main aria-labelledby="main" className="main-wrapper">
        <MegaMenu />
        <section className="banner" aria-labelledby="banner">
          <section className="banner-content">
            <h1 className="banner-heading">GET CHANGED.</h1>
            <h1 className="banner-heading">STAY WARM.</h1>
            <p>Outdoor gear to keep you going. Any weather, anywhere.</p>
            <button className="banner-button">Shop Now</button>
          </section>
        </section>

        <section className="carousel-container" aria-describedby="carousel">
          <div className="carousel-content">
            <article className="text-container">
              <h1 className="carousel-heading">EVERY SIDE OF STRONG</h1>
              <p className="carousel-subheading">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
              </p>
            </article>

            <nav className="arrow-container">
              <button
                className="arrow-btn"
                onClick={() =>
                  setCarouselIndex((prev) => (prev > 0 ? prev - 1 : 3))
                }
              >
                <img src="./left-chevron.png" alt="Previous" />
              </button>
              <button
                className="arrow-btn"
                onClick={() =>
                  setCarouselIndex((prev) => (prev < 3 ? prev + 1 : 0))
                }
              >
                <img src="./right-chevron.png" alt="Next" />
              </button>
            </nav>
          </div>

          <figure className="carousel-images">
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
          </figure>

          <section aria-labelledby="progress-bar">
            <ProgressBar currentIndex={carouselIndex} totalSlides={4} />
          </section>
        </section>

        <section className="hiking">
          <section className="hiking-content">
            <h1 className="hiking-heading">PACK IN THE ADVENTURE.</h1>

            <p>
              With room for water,snacks and extra layers,these hiking jackets
              are tried and trusted for the trails ahead
            </p>
            <button className="banner-button">Shop Hiking Gears</button>
          </section>
        </section>

        <section
          className="featured-carousel-container"
          aria-describedby="carousel"
        >
          <section className="featured-carousel-content">
            <section className="featured-heading-container">
              <header>
                <h1 className="featured-carousel-heading">
                  FOR YOUR NEXT ADVENTURE
                </h1>
              </header>
              <section className="featured-carousel-text">
                <ul>
                  <li>NEW ARRIVALS</li>
                  <li>JACKETS</li>
                  <li>SHOES</li>
                  <li>BAGS & GEAR</li>
                  <li></li>
                </ul>
              </section>
            </section>

            <nav className="arrow-container">
              <button
                className="arrow-btn"
                onClick={() =>
                  setFeaturedIndex((prev) => (prev > 0 ? prev - 1 : 3))
                }
              >
                <img src="./left-chevron.png" alt="Previous" />
              </button>
              <button
                className="arrow-btn"
                onClick={() =>
                  setFeaturedIndex((prev) => (prev < 3 ? prev + 1 : 0))
                }
              >
                <img src="./right-chevron.png" alt="Next" />
              </button>
            </nav>
          </section>

          <section
            className="featured-carousel-images"
            aria-describedby="carousel"
          >
            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <article className="image-content">
                <p className="brand-name">Adidas</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p className="final-price">$150.00</p>
                <figure className="rating">
                  <img src={stars} alt="Rating" />
                </figure>
              </article>
            </section>

            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <ul className="product-color-options">
                <li className="product-color-circle-1"></li>
                <li className="product-color-circle-2"></li>
                <li className="product-color-circle-3"></li>
                <li className="product-color-circle-4"></li>
                <li className="product-color-circle-5"></li>
                <li className="product-color-max">+ 5 more</li>
              </ul>

              <article className="image-content-with-color">
                <p className="brand-name">Levis</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p className="final-price">$150.00</p>
                <div className="rating">
                  <img src={stars} />
                  <span> (570)</span>
                </div>
              </article>
            </section>

            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <ul className="product-color-options">
                <li className="product-color-circle-1"></li>
                <li className="product-color-circle-2"></li>
                <li className="product-color-circle-3"></li>
              </ul>

              <article className="image-content-with-color">
                <p className="brand-name">Nike</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p>$120.00</p>
                <div className="rating">
                  <img src={stars} />
                  <span> (570)</span>
                </div>
              </article>
            </section>

            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <ul className="product-color-options">
                <li className="product-color-circle-1"></li>
                <li className="product-color-circle-2"></li>
                <li className="product-color-circle-3"></li>
                <li className="product-color-circle-4"></li>
                <li className="product-color-circle-5"></li>
                <li className="product-color-max">+ 5 more</li>
              </ul>

              <article className="image-content-with-color">
                <p className="brand-name">Levis</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <span className="rating">
                  {" "}
                  <p className="discounted-price">$150.00</p>
                  <p className="previous-price">$260.00</p>
                </span>
                <div className="rating">
                  <image src={stars} />
                  <span> (570)</span>
                </div>
              </article>
            </section>
          </section>

          <section aria-labelledby="progress-bar">
            <ProgressBar currentIndex={featuredIndex} totalSlides={4} />
          </section>
        </section>

        <section
          className="featured-carousel-container"
          aria-describedby="carousel-container"
        >
          <section className="featured-carousel-content">
            <header className="featured-heading-container">
              <h1 className="featured-carousel-heading">FEATURED</h1>
            </header>
            <nav className="arrow-container">
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
            </nav>
          </section>

          <section
            className="featured-carousel-images"
            aria-describedby="carousel-container"
          >
            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <article className="image-content">
                <p className="brand-name">Adidas</p>
                <p className="product-name">Men's Tekware Grid Pants</p>
                <p className="final-price">$150.00</p>
                <figure className="rating">
                  <img src={stars} alt="Rating" />
                </figure>
              </article>
            </section>

            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <ul className="product-color-options">
                <li className="product-color-circle-1"></li>
                <li className="product-color-circle-2"></li>
                <li className="product-color-circle-3"></li>
                <li className="product-color-circle-4"></li>
                <li className="product-color-circle-5"></li>
                <li className="product-color-max">+ 5 more</li>
              </ul>

              <article className="image-content-with-color">
                <p className="brand-name">Levis</p>
                <p className="product-name">Women's Borealis Backpack</p>
                <p>$120.00</p>
                <div className="rating">
                  <img src={stars} />
                  <span> (570)</span>
                </div>
              </article>
            </section>

            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <ul className="product-color-options">
                <li className="product-color-circle-1"></li>
                <li className="product-color-circle-2"></li>
                <li className="product-color-circle-3"></li>
              </ul>

              <article className="image-content-with-color">
                <p className="brand-name">Nike</p>
                <p className="product-name">Men's Antora Jacket</p>
                <p className="final-price">$150.00</p>
                <div className="rating">
                  <img src={stars} />
                  <span> (570)</span>
                </div>
              </article>
            </section>

            <section className="image-grid">
              <figure className="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" className="image-image" />
              </figure>
              <ul className="product-color-options">
                <li className="product-color-circle-1"></li>
                <li className="product-color-circle-2"></li>
                <li className="product-color-circle-3"></li>
                <li className="product-color-circle-4"></li>
                <li className="product-color-circle-5"></li>
                <li className="product-color-max">+ 5 more</li>
              </ul>

              <article className="image-content-with-color">
                <p className="brand-name">Levis</p>
                <p className="product-name">Women's Hypnum Shoes</p>
                <span className="rating">
                  {" "}
                  <p className="discounted-price">$150.00</p>
                  <p className="previous-price">$260.00</p>
                </span>
                <div className="rating">
                  <img src={stars} />
                  <span> (570)</span>
                </div>
              </article>
            </section>
          </section>

          <section aria-labelledby="progress-bar">
            <ProgressBar currentIndex={currentIndex} totalSlides={4} />
          </section>
        </section>

        <section
          className="about-trika-container"
          aria-describedby="about-company"
        >
          <figure>
            <img src="https://sportano.pl/blog/wp-content/uploads/2023/09/impregnacja-DWR-co-to-jest-i-jak-dziala.jpg" />
          </figure>
          <section className="about-trika">
            <p className="about-trika-heading">ABOUT TRIKA</p>
            <p className="trika-mission">
              Our mission is to create exceptional images while upholding our
              responsibility towards Mother Nature,our communities,and the
              future ahead
            </p>
            <button className="read-story">Read Our Story</button>
          </section>
        </section>

        <section className="community-container" aria-describedby="community">
          <section className="community-heading-container">
            <figure className="insta-icon">
              <img src={instagram} alt="insta Icon" />
            </figure>
            <header>
              <h1 className="community-heading">TRIKA COMMUNITY</h1>
            </header>
          </section>

          <section className="trika-community-text">
            <p>
              mention @Trika on instagram for a chance to have your look
              featured in our website, you'll receive an exclusive gift and
              Trika Club points
            </p>
          </section>

          <figure className="community-images">
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
          </figure>

          <section className="buy-photos">
            <p>click on the photos to buy products</p>
            <button className="shop-insta">Shop Our Instagram</button>
          </section>
        </section>

        <section className="why-shop-container" aria-describedby="why-shop">
          <section className="why-shop-content">
            <header className="why-shop-heading-container">
              <h1 className="why-shop-carousel-heading">WHY SHOP AT TRIKA?</h1>
            </header>
            <section className="shop-columns">
              <article className="shop-column">
                <img src={packaging} />
                <ul>
                  <h5>FREE DELIVERY</h5>
                  <li>Complimentory Delivery</li>
                  <li>On Every Single Order.</li>
                </ul>
              </article>
              <article className="shop-column">
                <img src={dollar} />
                <ul>
                  <h5>MONEY-BACK GUARANTEE</h5>
                  <li>Free Returns And</li>
                  <li>Exchanges</li>
                </ul>
              </article>
              <article className="shop-column">
                <img src={verified} />
                <ul>
                  <h5>SHOP WITH AN EXPERT</h5>
                  <li>Call 80 34 888 4323 Or</li>
                  <li>Chat To Have Your Question</li>
                  <li>Answered.</li>
                </ul>
              </article>
            </section>
          </section>
        </section>

        <section
          className="stories-carousel-container"
          aria-describedby="carousel-container"
        >
          <section className="stories-heading-container">
            <h1 className="stories-carousel-heading">STORIES</h1>
            <button>View Our Blog</button>
          </section>

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

        <section
          className="recently-carousel-container"
          aria-describedby="carousel-container"
        >
          <section className="recently-carousel-content">
            <header className="recently-heading-container">
              <h1 className="recently-carousel-heading">RECENTLY VIEWED</h1>
            </header>
            <nav className="arrow-container">
              <button
                className="arrow-btn"
                onClick={() =>
                  setRecentlyViewedIndex((prev) => (prev > 0 ? prev - 1 : 3))
                }
              >
                <img src="./left-chevron.png" alt="Previous" />
              </button>
              <button
                className="arrow-btn"
                onClick={() =>
                  setRecentlyViewedIndex((prev) => (prev < 3 ? prev + 1 : 0))
                }
              >
                <img src="./right-chevron.png" alt="Next" />
              </button>
            </nav>
          </section>

          <section className="recently-carousel-images">
            <section class="image-grid">
              <figure class="image-card">
                <img className="heart-icon" src={heart} alt="Heart" />

                <img src={bag} alt="bag" class="image-image" />
              </figure>
              <article class="image-content">
                <p className="brand-name">Adidas</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p>$120.00</p>
                <img src={stars} alt="Rating" class="rating" />
              </article>
            </section>

            <section class="image-grid">
              <figure class="image-card">
                <img src={heart} alt="Heart" className="heart-icon" />

                <img src={bag} alt="bag" class="image-image" />
              </figure>
              <article class="image-content">
                <p className="brand-name">Adidas</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p className="final-price">$150.00</p>
                <img src={stars} alt="Rating" class="rating" />
              </article>
            </section>

            <article class="image-grid">
              <figure class="image-card">
                <img src={heart} alt="Heart" className="heart-icon" />

                <img src={bag} alt="bag" class="image-image" />
              </figure>
              <article class="image-content">
                <p className="brand-name">Adidas</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p className="final-price">$150.00</p>
                <img src={stars} alt="Rating" class="rating" />
              </article>
            </article>

            <section class="image-grid">
              <figure class="image-card">
                <img src={heart} alt="Heart" className="heart-icon" />

                <img src={bag} alt="bag" class="image-image" />
              </figure>
              <article class="image-content">
                <p className="brand-name">Adidas</p>
                <p className="product-name">
                  Women's Class V Pathfinder One-Piece
                </p>
                <p className="final-price">$150.00</p>
                <img src={stars} alt="Rating" class="rating" />
              </article>
            </section>
          </section>

          <section aria-labelledby="progress-bar">
            <ProgressBar currentIndex={recentlyViewedIndex} totalSlides={4} />
          </section>
        </section>

        <section aria-describedby="join-trika-offer" className="join-trika">
          <p>JOIN TRIKA AND GET 15% OFF</p>
          <span>
            <article className="join-search-container">
              <aside className="join-search-wrapper">
                <input
                  type="text"
                  className="join-email"
                  aria-placeholder="join-trika"
                  aria-describedby="format"
                  placeholder="Enter Your Email"
                />
                <img src={arrow} alt="Submit" />
              </aside>
            </article>
          </span>
        </section>
        <Footer />
      </main>
    </div>
  );
};
