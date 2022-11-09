import Logo from "../../assets/Logo/BrainFlix-logo.svg";

import Button from "../../assets/Icons/upload.svg";
//scss
import "./header.scss";
//in-built imports
import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="../../App.js" className="header__link">
          <img
            className="header__container__logo"
            src={Logo}
            alt="BrainFlix Logo"
          />
        </a>
      </div>

      <div className="header__container-nav">
        <div className="header__search">
          <div className="header__search-icon">
            <input
              className="header__search-box"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="header__avatar"></div>
        </div>
        <div className="header__container-med">
          <div className="header__container__btn">
            <button className="header__container__btns">
              <img
                className="header__container__btns-img"
                alt="upload"
                src={Button}
              />
              UPLOAD
            </button>
            <div className="header__avatar-upload"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
