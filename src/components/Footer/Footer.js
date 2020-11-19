import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="container">
      <Container id="contact" className="footer p-5 m-5">
      <Row>
        <Col md={4}>
          <div className="footer-image">
          <img src="https://i.ibb.co/k6pCqVQ/Group-86.png" alt="" />
          </div>
          <ul className="footer-social mt-3">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faBehance} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585" }}
                        icon={faDribbble} />
                    </a>
                  </li>
                </ul>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={4}>
              <ul className="footer-list">
                <li><a href="#">Features</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <ul className="footer-list">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </Col>
            <Col md={4}>
            <ul className="footer-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Footer;