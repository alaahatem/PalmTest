import React, { Component } from "react";
import Crane from "../../assets/img/crane/crane@2x.png";
import Project from "../../assets/img/project/project@2x.png";
import Video from "../../assets/img/video.mp4";

export default class About extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./js/accordion.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <section className="section-about">
        <div className="aboutus u-margin-bottom-big">
          <div className="aboutus-video">
            <div className="aboutus-video__content">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={Video} type="video/mp4" />
                <source src={Video} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
            <div className="enable-sound"> Enable Sound </div>
          </div>
        </div>
        <div className="u-padding u-margin-bottom-small">
          <h2 className="heading-secondary"> Our Story </h2>
        </div>
        <div className="row-grid">
          <div className="u-margin-bottom-small">
            <p className="paragraph u-padding">
              Palm Construction Company "PCC" is a Member of Palm Group and a
              leading regional engineering and construction contractor
              specialized turn - key contractor in infrastructure and
              specialized in delivering high complex Construction Projects in
              different Sectors such as Industrial, Military, Residential,
              Administration / Commercial Buildings and Medical.
            </p>
          </div>
          <div className="col-1-of-2 u-padding">
            <button className="btn-global"> KNOW MORE </button>
          </div>
          <div className="col-1-of-2">
            <div className="services">
              <h3> Our Services &#9473;&#9473;&#9473; </h3>
              <div className="collapsible-services">
                <div className="accordion-div">
                  <div className="accordion">
                    <i>
                      <img className="img-icon" src={Crane} alt="" />
                    </i>
                    <div className="service-name"> Construction </div>
                  </div>
                  <div className="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="accordion-div">
                  <button className="accordion">
                    <i>
                      <img className="img-icon" src={Project} alt="" />
                    </i>
                    <div className="service-name"> Project Management </div>
                  </button>
                  <div className="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
