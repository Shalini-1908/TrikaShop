import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBars } from "react-icons/fa";
import { FaSearch, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import location from "../images/direction.png";
import interogation from "../images/interrogation-mark.png";
import usa from "../images/usa.png";
import { Link } from "react-router-dom";
import "../Css/MegaMenu.css";

export const MegaMenu = () => {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? "" : menu));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [openMobDropdown, setOpenMobDropdown] = useState(null);
  const [openMobSubmenu, setOpenMobSubmenu] = useState(null);

  const toggleMobDropdown = (menu) => {
    setOpenMobDropdown((prev) => (prev === menu ? null : menu));
    setOpenMobSubmenu(null);
  };

  const toggleMobSubmenu = (submenu) => {
    setOpenMobSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  return (
    <>
      <div className="right-options">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={interogation}
            style={{ width: "20px", height: "20px" }}
            alt="Help"
          />
          <label htmlFor="help">Get Help</label>
        </div>
        <select style={{ width: "20px", border: "none" }} id="help">
          <option value="help-center"></option>
          <option value="contact-us">Contact Us</option>
        </select>
        <img
          src={location}
          style={{ width: "20px", height: "20px" }}
          alt="Location"
        />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Store Locator
        </span>
        <img src={usa} style={{ width: "20px", height: "20px" }} alt="USA" />
        <label htmlFor="country">United States (USD)</label>
        <select style={{ width: "20px", border: "none" }} id="country">
          <option value="usd"></option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <header className="mega-menu" ref={dropdownRef}>
        <nav className="menu-items">
          <Link to="/product">
            <img src="./logo.svg" alt="Site Logo" className="logo" />
          </Link>

          {!isMobile && (
            <>
              <a
                href="#"
                className="menu-link"
                onClick={() => toggleDropdown("new-arrivals")}
              >
                NEW ARRIVALS
              </a>
              <a
                href="#"
                className="menu-link"
                onClick={() => toggleDropdown("men")}
              >
                Men
              </a>
              <a
                href="#"
                className="menu-link"
                onClick={() => toggleDropdown("women")}
              >
                Women
              </a>
              <a
                href="#"
                className="menu-link"
                onClick={() => toggleDropdown("kids")}
              >
                Kids
              </a>
              <a
                href="#"
                className="menu-link"
                onClick={() => toggleDropdown("sports")}
              >
                Sports
              </a>
              <a
                href="#"
                className="menu-link"
                onClick={() => toggleDropdown("brands")}
              >
                Brands
              </a>
              <a
                href="#"
                className="menu-link-red"
                onClick={() => toggleDropdown("sale")}
              >
                Sale
              </a>
            </>
          )}
        </nav>

        {/* Search & Icons Container */}
        <div className="search-container">
          {!isMobile ? (
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search"
                placeholder="Search for products..."
              />
            </div>
          ) : (
            // Only Search Icon on Mobile
            <FaSearch className="search-icon" onClick={toggleSearchModal} />
          )}

          <div className="icon-group">
            <img src="./user.png" alt="User Account" />
            <img src="./heart.png" alt="Favorites" />
            <img src="./shopping-bag.png" alt="Shopping Bag" />
          </div>

          {/* Hamburger Icon */}
          {isMobile && (
            <div className="hamburger-icon" onClick={toggleMenu}>
              <FaBars
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              />
            </div>
          )}
        </div>

        {/* Search Modal (Only for Mobile) */}
        {isSearchOpen && (
          <div className="search-modal">
            <div className="modal-content">
              <button className="close-btn" onClick={toggleSearchModal}>
                <FaTimes />
              </button>
              <input
                type="text"
                className="modal-search-input"
                placeholder="Search..."
              />
            </div>
          </div>
        )}

        {/* Mobile Menu*/}
        {isMobile && isMenuOpen && (
          <div className="mobile-menu">
            <button className="close-mobile-menu" onClick={toggleMenu}>
              <FaTimes />
            </button>

            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <button
                  className="menu-link-btn"
                  onClick={() => toggleMobDropdown("new-arrivals")}
                >
                  NEW ARRIVALS
                  {openMobDropdown === "new-arrivals" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {openMobDropdown === "new-arrivals" && (
                  <ul className="submenu">
                    <li>
                      <button
                        className="submenu-btn"
                        onClick={() => toggleMobSubmenu("shop-new-arrivals")}
                      >
                        Shop All New Arrivals{" "}
                        {openMobSubmenu === "shop-new-arrivals" ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>

                      {openMobSubmenu === "shop-new-arrivals" && (
                        <ul className="sub-submenu">
                          <li>New Arrivals</li>
                          <li>Best Sellers</li>
                          <li>Big Sizes</li>
                          <li>Matching Sets</li>
                          <li>Hike Club</li>
                          <li>Trail Run</li>
                          <li className="">Sale</li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              <li className="mobile-menu-item">
                <button
                  className="menu-link-btn"
                  onClick={() => toggleMobDropdown("men")}
                >
                  Men
                  {openMobDropdown === "men" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {openMobDropdown === "men" && (
                  <ul className="submenu">
                    <li>
                      <button
                        className="submenu-btn"
                        onClick={() => toggleMobSubmenu("shop-all-men")}
                      >
                        Shop All Men's{" "}
                        {openMobSubmenu === "shop-all-men" ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>

                      {openMobSubmenu === "shop-all-men" && (
                        <ul className="sub-submenu">
                          <li>New Arrivals</li>
                          <li>Best Sellers</li>
                          <li>Big Sizes</li>
                          <li>Matching Sets</li>
                          <li>Hike Club</li>
                          <li>Trail Run</li>
                          <li className="">Sale</li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              <li className="mobile-menu-item">
                <button
                  className="menu-link-btn"
                  onClick={() => toggleMobDropdown("women")}
                >
                  Women
                  {openMobDropdown === "women" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {openMobDropdown === "women" && (
                  <ul className="submenu">
                    <li>
                      <button
                        className="submenu-btn"
                        onClick={() => toggleMobSubmenu("shop-all-women")}
                      >
                        Shop All Women's{" "}
                        {openMobSubmenu === "shop-all-women" ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>

                      {openMobSubmenu === "shop-all-women" && (
                        <ul className="sub-submenu">
                          <li>New Arrivals</li>
                          <li>Best Sellers</li>
                          <li>Big Sizes</li>
                          <li>Matching Sets</li>
                          <li>Hike Club</li>
                          <li>Trail Run</li>
                          <li className="">Sale</li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}

        <div
          id="new-arrivals"
          className={`dropdown-content ${
            openDropdown === "new-arrivals" ? "open" : ""
          }`}
        >
          <p className="dropdown-title">Shop All NEW ARRIVALS</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>

        <div
          id="men"
          className={`dropdown-content ${openDropdown === "men" ? "open" : ""}`}
        >
          <p className="dropdown-title">Shop All Men's</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>
        <div
          id="women"
          className={`dropdown-content ${
            openDropdown === "women" ? "open" : ""
          }`}
        >
          <p className="dropdown-title">Shop All Women's</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>
        <div
          id="kids"
          className={`dropdown-content ${
            openDropdown === "kids" ? "open" : ""
          }`}
        >
          <p className="dropdown-title">Shop All Kid's</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>
        <div
          id="sports"
          className={`dropdown-content ${
            openDropdown === "sports" ? "open" : ""
          }`}
        >
          <p className="dropdown-title">Shop All Sports</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <image
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>
        <div
          id="brands"
          className={`dropdown-content ${
            openDropdown === "brands" ? "open" : ""
          }`}
        >
          <p className="dropdown-title">Shop All Brands</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>
        <div
          id="sale"
          className={`dropdown-content ${
            openDropdown === "sale" ? "open" : ""
          }`}
        >
          <p className="dropdown-title">Sale</p>

          <div className="dropdown-columns">
            <div className="column">
              <ul>
                <h5>Featured</h5>
                <li>NEW ARRIVALS</li>
                <li>Best Sellers</li>
                <li>Big Sizes</li>
                <li>Matching Sets</li>
                <li>Hike Club</li>
                <li>Trail Run</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h5>New For Men</h5>
                <li>Casual jackets</li>
                <li>Down & Insulated</li>
                <li>Fleece & Soft-Shell</li>
                <li>Rain Jackets</li>
                <li>Running Jackets</li>
                <li>Windbreakers</li>
                <li>Ski & Snowboard</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New For Women</h5>
                <li>Shirts</li>
                <li>T -Shirts</li>
                <li>Graphic Tops</li>
                <li>Sweaters & Sweatshirts</li>
                <li>Vests</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <h5>New for Kids</h5>
                <li>Hike</li>
                <li>Boots</li>
                <li>Trail Run</li>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="image-column">
              <img
                src="https://images.blue-tomato.com/is/image/bluetomato/305085711_front.jpg-czTFS1fCDpbxsAZE9DMugZJLziA/305085711+front+jpg.jpg?$tsh$&wid=993&hei=1323&fit=crop%2C1"
                alt="NEW ARRIVALS"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
