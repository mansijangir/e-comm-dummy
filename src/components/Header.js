import "../style/header.css";
import HeaderData from "../../src/data/header.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState("");
  const [handleTooltip, setHandleTooltip] = useState(false);

  const handleNavbar = () => {
    setActiveNavbar(!activeNavbar);
  };
  const activeNavTabs = (index) => {
    setActiveTooltip(index);
    setHandleTooltip(!handleTooltip);
  };

  return (
    <div>
      <div className="header-container">
        <div className="logo-container-box">
          <div className="logo-container">
            <Link to="/" className="logo">
              Shopper.
            </Link>
          </div>
          <div className="hamburger-container">
            <i
              className="fa-solid fa-bars hamburger"
              onClick={handleNavbar}
            ></i>
          </div>
        </div>
        <div className={`wrapper ${activeNavbar && "open-navbar"}`}>
          <div className="header-options">
            <ul className="options-list">
              <li
                className="options-list-item tooltip"
                onClick={() => activeNavTabs("home")}
              >
                Home
                <div
                  className={
                    activeTooltip === "home" && handleTooltip
                      ? "open-tooltip-text"
                      : "tooltiptext"
                  }
                >
                  {HeaderData.header.home.map((home) => {
                    return (
                      <ul>
                        <li className="dropdown-content">{home}</li>
                      </ul>
                    );
                  })}
                </div>
              </li>

              <li
                className="options-list-item  tooltip"
                onClick={() => activeNavTabs("shop")}
              >
                Shop
                <div
                  className={
                    activeTooltip === "shop" && handleTooltip
                      ? "open-tooltip-text"
                      : "tooltiptext"
                  }
                >
                  {HeaderData.header.shop.map((shop) => {
                    return (
                      <ul>
                        <li className="dropdown-content">{shop}</li>
                      </ul>
                    );
                  })}
                </div>
              </li>
              <li
                className="options-list-item  tooltip"
                onClick={() => activeNavTabs("pages")}
              >
                Pages
                <div
                  className={
                    activeTooltip === "pages" && handleTooltip
                      ? "open-tooltip-text"
                      : "tooltiptext"
                  }
                >
                  {HeaderData.header.pages.map((pages) => {
                    return (
                      <ul>
                        <li className="dropdown-content">{pages}</li>
                      </ul>
                    );
                  })}
                </div>
              </li>
              <li
                className="options-list-item   tooltip"
                onClick={() => activeNavTabs("blogs")}
              >
                Blogs
                <div
                  className={
                    activeTooltip === "blogs" && handleTooltip
                      ? "open-tooltip-text"
                      : "tooltiptext"
                  }
                >
                  {HeaderData.header.blogs.map((blogs) => {
                    return (
                      <ul>
                        <li className="dropdown-content">{blogs}</li>
                      </ul>
                    );
                  })}
                </div>
              </li>
            </ul>

            <div className="header-options-icons">
              <ul className="icons-list">
                <li className="icons-list-item">
                  <i className="header-icon fa-regular fa-magnifying-glass"></i>
                </li>
                <li className="icons-list-item">
                 
                    <i className="header-icon fa-regular fa-user"></i>
                  
                </li>
                <li className="icons-list-item">
                  <Link to="/wishlist">
                    <i className="header-icon fa-regular fa-heart">
                      <span className="cart-badge">
                        {props.wishList.length}
                      </span>
                    </i>
                  </Link>
                </li>
                <li className="icons-list-item"> <Link to="/cart">
                  <i className="header-icon fa-regular fa-cart-shopping"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-header">
        <div className="sub-header-container">
          <span className="sub-header-content">
            ⚡️ Happy Holiday Deals on Everything ⚡️
          </span>
        </div>
      </div>
    </div>
  );
}
