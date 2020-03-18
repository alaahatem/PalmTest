import React, { Component } from "react";
import Logo from "../../assets/img/palm-logo/image-1@2x.png";

import Header from "./Header.jsx";
import About from "./About.jsx";
import Clients from "./Clients.jsx";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <About />
          <Clients />
          <section className="section-features">
            <div className="row-grid">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Meet nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Live a healthier life
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Most popular tours</h2>
            </div>

            <div className="row-grid">
              <div className="col-1-of-3">
                <div className="card-global">
                  <div className="card-global__side card-global__side--front">
                    <div className="card-global__picture card-global__picture--1">
                      &nbsp;
                    </div>
                    <h4 className="card-global__heading">
                      <span className="card-global__heading-span card-global__heading-span--1">
                        The Sea Explorer
                      </span>
                    </h4>
                    <div className="card-global__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-global__side card-global__side--back card-global__side--back-1">
                    <div className="card-global__cta">
                      <div className="card-global__price-box">
                        <p className="card-global__price-only">Only</p>
                        <p className="card-global__price-value">$297</p>
                      </div>
                      <a href="#popup" className="btn-global btn-global--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="card-global">
                  <div className="card-global__side card-global__side--front">
                    <div className="card-global__picture card-global__picture--2">
                      &nbsp;
                    </div>
                    <h4 className="card-global__heading">
                      <span className="card-global__heading-span card-global__heading-span--2">
                        The Forest Hiker
                      </span>
                    </h4>
                    <div className="card-global__details">
                      <ul>
                        <li>7 day tours</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-global__side card-global__side--back card-global__side--back-2">
                    <div className="card-global__cta">
                      <div className="card-global__price-box">
                        <p className="card-global__price-only">Only</p>
                        <p className="card-global__price-value">$497</p>
                      </div>
                      <a href="#popup" className="btn-global btn-global--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="card-global">
                  <div className="card-global__side card-global__side--front">
                    <div className="card-global__picture card-global__picture--3">
                      &nbsp;
                    </div>
                    <h4 className="card-global__heading">
                      <span className="card-global__heading-span card-global__heading-span--3">
                        The Snow Adventurer
                      </span>
                    </h4>
                    <div className="card-global__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-global__side card-global__side--back card-global__side--back-3">
                    <div className="card-global__cta">
                      <div className="card-global__price-box">
                        <p className="card-global__price-only">Only</p>
                        <p className="card-global__price-value">$897</p>
                      </div>
                      <a href="#popup" className="btn-global btn-global--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn-global btn-global--green">
                Discover all tours
              </a>
            </div>
          </section>

          <section className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src="img/video.mp4" type="video/mp4" />
                <source src="img/video.webm" type="video/webm" />
                Your browser is not supported!
              </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>

            <div className="row-grid">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src="img/nat-8.jpg"
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui.
                  </p>
                </div>
              </div>
            </div>

            <div className="row-grid">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src="img/nat-9.jpg"
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    Jack Wilson
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    WOW! My life is completely different now
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui.
                  </p>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn-text">
                Read all stories &rarr;
              </a>
            </div>
          </section>

          <section className="section-book">
            <div className="row-grid">
              <div className="book">
                <div className="book__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">Start booking now</h2>
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full name"
                        id="name"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Full name
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        type="email"
                        className="form__input"
                        placeholder="Email address"
                        id="email"
                        required
                      />
                      <label htmlFor="email" className="form__label">
                        Email address
                      </label>
                    </div>

                    <div className="form__group u-margin-bottom-medium">
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="small"
                          name="size"
                        />
                        <label htmlFor="small" className="form__radio-label">
                          <span className="form__radio-button"></span>
                          Small tour group
                        </label>
                      </div>

                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="large"
                          name="size"
                        />
                        <label htmlFor="large" className="form__radio-label">
                          <span className="form__radio-button"></span>
                          Large tour group
                        </label>
                      </div>
                    </div>

                    <div className="form__group">
                      <button className="btn-global btn-global--green">
                        Next step &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
