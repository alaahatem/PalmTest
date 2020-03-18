import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/img/palm-logo/image-1@2x.png";

const Clients = () => {
  return (
    <React.Fragment>
      <section className="section-features">
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption
              style={{
                position: "relative",
                left: "auto",
                right: "auto",
                bottom: "auto"
              }}
            >
              <Container
                className={["u-margin-bottom-medium", "u-center-text"]}
              >
                <Row>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                  <Col
                    md={4}
                    sm={6}
                    xs={6}
                    className={["u-margin-bottom-medium", "u-center-text"]}
                  >
                    <img src={Logo} alt="Logo" className="header__logo" />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </React.Fragment>
  );
};

export default Clients;
