import React from "react";
import Logo from "../../assets/img/palm-logo/image-1@2x.png";
const Header = () => {
  return (
    <React.Fragment>
      <div
        className="navigation"
        style={{
          display: "none"
        }}
      >
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon"> & nbsp; </span>{" "}
        </label>{" "}
        <div className="navigation__background"> & nbsp; </div>{" "}
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span> 01 </span>About Natous{" "}
              </a>{" "}
            </li>{" "}
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span> 02 </span>Your benfits{" "}
              </a>{" "}
            </li>{" "}
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span> 03 </span>Popular tours{" "}
              </a>{" "}
            </li>{" "}
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span> 04 </span>Stories{" "}
              </a>{" "}
            </li>{" "}
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span> 05 </span>Book now{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </div>{" "}
      <header className="header">
        <div className="header__logo-box">
          <img src={Logo} alt="Logo" className="header__logo" />
        </div>{" "}
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--sub">
              Our Passion for Excellence{" "}
            </span>{" "}
            <span className="heading-primary--main"> Redefines what </span>{" "}
            <span className="heading-primary--main">
              you have come to expect{" "}
            </span>{" "}
            <span className="heading-primary--main">
              from a Construction Company.{" "}
            </span>{" "}
          </h1>{" "}
        </div>{" "}
      </header>{" "}
    </React.Fragment>
  );
};

export default Header;
