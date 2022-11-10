import Logo from "../../assets/Logo/BrainFlix-logo.svg";

import Button from "../../assets/Icons/upload.svg";
//scss
import "./header.scss";
//in-built imports
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <section className="header1">
      <header className="header">
        <Link to="../../Home.js">
          <div className="header__container">
            <img
              className="header__container__logo"
              src={Logo}
              alt="BrainFlix Logo"
            />
          </div>
        </Link>
        <div className="header__search">
          <input
            className="header__search-box"
            type="text"
            placeholder="Search"
          />
          <div className="header__avatar"></div>
        </div>
        <div className="header__container__btn">
          <Link to="../../page/videoUpload/VideoUpload.js">
            <button className="header__container__btns" href="">
              <img
                className="header__container__btns-img"
                alt="upload"
                src={Button}
              />
              UPLOAD
            </button>
          </Link>
          <div className="header__avatar-upload"></div>
        </div>
      </header>
    </section>
  );
};

export default Header;
