import React, { Component } from "react";
import Logo from "../../assets/img/palm-logo/image-1@2x.png";
export class Header extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <header class="masthead">
          <div class="container">
            <div className="header__logo-box">
              <img src={Logo} alt="Logo" className="header__logo" />
            </div>{" "}
            <nav class="navbar navbar-expand-lg" id="mainNav">
              <div class="container">
                <button
                  class="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  Menu
                  <i className="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#services">
                        Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#team">
                        Team
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link js-scroll-trigger" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="intro-text">
              <div class="OUR-STORY">OUR STORY</div>
              <div className="About_Description">
                Palm Construction is one of the leading Regional Engineering &
                Construction Contractors that takes pride in delivering high,
                complex, Construction Projects. As a firm, we are proud to be
                working in various different sectors, like, Industrial,
                Military, Residential, Administrative & Commercial Buildings,
                Medical & Infrastructure Projects, etc.
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
