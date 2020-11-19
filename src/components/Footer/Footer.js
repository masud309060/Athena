import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  let url = ""
  return (
    <Container id="contact" className="footer p-5 m-5">
      <Row>
        <Col md={4}>
          <div className="footer-image">
          <img src="https://i.ibb.co/k6pCqVQ/Group-86.png" alt="" />
          </div>
          <ul className="footer-social mt-3">
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
                      <FontAwesomeIcon
                        style={{ fontSize: "25px", color:"#838585"}}
                        icon={faBehance} />
                    </a>
                  </li>
                  <li>
                    <a href={url}>
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
                <li><a href={url}>Features</a></li>
                <li><a href={url}>Enterprise</a></li>
                <li><a href={url}>Pricing</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <ul className="footer-list">
                <li><a href={url}>Blog</a></li>
                <li><a href={url}>Help Center</a></li>
                <li><a href={url}>Contact Us</a></li>
                <li><a href={url}>Status</a></li>
              </ul>
            </Col>
            <Col md={4}>
            <ul className="footer-list">
                <li><a href={url}>About Us</a></li>
                <li><a href={url}>Terms of Service</a></li>
                <li><a href={url}>Security</a></li>
                <li><a href={url}>Login</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;