import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../../assets/Icons/upload.svg";

import "./header.scss";

import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="BrainFlix Logo" />
      <div className="header__search">
        <input
          className="header__search-box"
          type="text"
          placeholder="Search"
        ></input>{" "}
      </div>
      <button className="header__btn" href="">
        <img className="header__upload-btn" alt="Button" src={Button} />
        UPLOAD
      </button>
      <img className="avatar__img" src={avatar} alt="Avatar" />
    </header>
  );
};

export default Header;
