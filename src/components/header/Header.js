import Logo from "../../assets/Logo/BrainFlix-logo.svg";

import Button from "../../assets/Icons/upload.svg";
//scss
import "./header.scss";
//in-built imports
import React from "react";

const Header = (props) => {
  return (
    <section>
      <header className="header">
        <img className="header__logo" src={Logo} alt="BrainFlix Logo" />
        <div className="header__search">
          <input
            className="header__search-box"
            type="text"
            placeholder="Search"
          />
          <div className="header__avatar"></div>
        </div>
        <div className="header__container">
          <button className="header__container__btn" href="">
            <img
              className="header__container__btn-img"
              alt="upload"
              src={Button}
            />
            UPLOAD
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
