import React, { Component } from "react";
import Header from "../About/Header";
import Description from "./Description";
import Mission from "./Mission";

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Description />
        <Mission></Mission>
      </React.Fragment>
    );
  }
}

export default About;
