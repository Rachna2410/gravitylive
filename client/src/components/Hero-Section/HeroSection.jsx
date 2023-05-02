import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import Slider from "react-slick";
import slider1 from "../../assests/images/slider1.jpg";
import slider4 from "../../assests/images/slider4.jpeg";
import slider3 from "../../assests/images/slider3.jpg";
import "./hero-section.css";

const HeroSection = () => {

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section>
      <br />
      <Container>
      <Row>
          
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              

              <div className="testimonial__content w-100 align-items-center">

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial" > 
                    
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <img src={slider1} alt="" className="slider_img w-100" />
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course 
                      </h6>
                      <img src={slider4} alt="" className="slider_img w-100 " />
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <img src={slider3} alt="" className="slider_img w-100 " />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          
        </Row>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-5 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
