import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import gravityImg from "../../assests/images/gravity.png";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About US",
    url: "/aboutus",
  },

  {
    display: "Courses",
    url: "/courses",
  },

  {
    display: "Blog",
    url: "/blog"
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/policy",
  },
  // {
  //   display: "Membership",
  //   url: "#",
  // },

  // {
  //   display: "Purchases Guide",
  //   url: "#",
  // },

  {
    display: "Terms of Service",
    url: "/terms",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            
              <img src={gravityImg} alt="" height={"100 px"} width={"220px"} className="footermg" />

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://wa.me/917737191159?text=Hi">
                  <i className="ri-whatsapp-fill"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h5 className="fw-bold">Explore</h5>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <NavLink to={item.url}>{item.display}</NavLink>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h5 className="fw-bold">Information</h5>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h5 className="fw-bold">Get in Touch</h5>

            <p><b>Address:</b> 215, pujan plaza, near fire station, Dumbhal, Parvat Patiya, Surat, Gujarat 395010 <br/>
             MAGNUS COMPLEX, above GJ-05 DOSA near SIGNET mall Kamrej, Gujarat 394185</p>
            <p> <b>Phone:</b> +917737191159 / +918141215888 </p>
            <p><b>Email:</b>gravitycareerinstitute98@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
