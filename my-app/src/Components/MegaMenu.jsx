import React, { useState, useEffect } from "react";
import location from "../images/direction.png";
import interogation from "../images/interrogation-mark.png";
import usa from "../images/usa.png";
import { Link } from "react-router-dom";

function MegaMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".mega-menu") === null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="right-options">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={interogation} style={{ width: "20px", height: "20px" }} />
          <label htmlFor="help">Get Help</label>
        </div>
        <select style={{ width: "20px", border: "none" }} id="help">
          <option value="help-center"></option>
          <option value="contact-us">Contact Us</option>
        </select>
        <img src={location} style={{ width: "20px", height: "20px" }} />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Store Locator
        </span>
        <img src={usa} style={{ width: "20px", height: "20px" }} />
        <label htmlFor="country">United States (USD)</label>
        <select style={{ width: "20px", border: "none" }} id="country">
          <option value="usd"></option>
          <option value="eur">EUR</option>
        </select>
      </div>

      <header className="mega-menu">
        <nav className="menu-items">
          <Link to="/product">
            <img src="./logo.svg" alt="Site Logo" className="logo" />
          </Link>
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
            className="menu-link"
            onClick={() => toggleDropdown("sale")}
          >
            Sale
          </a>
        </nav>

        <div className="search-container">
          <div className="search-wrapper">
            <img
              src="./search-interface-symbol.png"
              className="search-icon"
              alt="Search"
            />
            <input type="text" className="search" placeholder="Search" />
          </div>
          <img src="./user.png" alt="User Account" />
          <img src="./heart.png" alt="Favorites" />
          <img src="./shopping-bag.png" alt="Shopping Bag" />
        </div>

        {/* Dropdown Content */}
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
              <img
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
    </div>
  );
}

export default MegaMenu;
