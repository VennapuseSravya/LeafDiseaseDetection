import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Col, Row, Button, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

class BootstrapCarousel extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Col lg={2}></Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Carousel>
              <Carousel.Item>
                <img
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "100%",
                  }}
                  src={"assets/img/brown spot.jpeg"}
                  alt="brown spot"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "100%",
                  }}
                  src={"assets/img/Leaf Blast.jpeg"}
                  alt="Leaf Blast"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "100%",
                  }}
                  src={"assets/img/healthy.jpeg"}
                  alt="healthy"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "100%",
                  }}
                  src={"assets/img/narrow spot.jpeg"}
                  alt="narrow spot"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="first"
              style={{ padding: "15px" }}
            >
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: "10px",
                  }}
                >
                  <Nav variant="tabs" className="flex-row">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Leaf Blast</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Brown Spot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Narrow Brown Spot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Healthy</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Card
                        bg="transparent"
                        text="dark"
                        border="success"
                        className="text-center"
                        style={{
                          width: "18rem",
                          borderRadius: "5%",
                          borderWidth: "3px",
                        }}
                      >
                        <Card.Header>Leaf Blast</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            <b>Remedies</b>
                          </Card.Title>
                          <Card.Text>
                            <span className="badge rounded-pill bg-dark">
                              silicon fertilizers
                            </span>
                            <span className="badge rounded-pill bg-dark">
                              Triazoles
                            </span>
                            <span className="badge rounded-pill bg-dark">
                              Strobilurins
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Card
                        bg="transparent"
                        text="dark"
                        border="success"
                        className="text-center"
                        style={{
                          width: "18rem",
                          borderRadius: "5%",
                          borderWidth: "3px",
                        }}
                      >
                        <Card.Header>Brown Spot</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            <b>Remedies</b>
                          </Card.Title>
                          <Card.Text>
                            <span className="badge rounded-pill bg-dark">
                              Iprodione
                            </span>
                            <span className="badge rounded-pill bg-dark">
                              Propiconazole
                            </span>
                            <span className="badge rounded-pill bg-dark">
                              Azoxystrobin
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Card
                        bg="transparent"
                        text="dark"
                        border="success"
                        className="text-center"
                        style={{
                          width: "18rem",
                          borderRadius: "5%",
                          borderWidth: "3px",
                        }}
                      >
                        <Card.Header>Narrow Brown Spot</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            <b>Remedies</b>
                          </Card.Title>
                          <Card.Text>
                            <span className="badge rounded-pill bg-dark">
                              Propiconazole
                            </span>
                            <span className="badge rounded-pill bg-dark">
                              Adequate Potassium
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Card
                        bg="transparent"
                        text="dark"
                        border="success"
                        className="text-center"
                        style={{
                          variant: "success",
                          width: "18rem",
                          borderRadius: "5%",
                          borderWidth: "3px",
                        }}
                      >
                        <Card.Header>Healthy</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            <b>Remedies</b>
                          </Card.Title>
                          <Card.Text>
                            <span className="badge rounded-pill bg-dark">
                              No need of fertilizers
                            </span>
                            <span className="badge rounded-pill bg-dark">
                              Water the plants regularly
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <Link to="/Predictor">
              <Button className="btn btn-success">
                Click to Start prediction!
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BootstrapCarousel;
