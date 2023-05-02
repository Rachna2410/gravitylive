import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <br/>
              <h2>About Gravity Career Institute</h2>
              <p>
              Education empowers an individual to make the right choices. Right choices in life lead to success, happiness and satisfaction.
              </p>
              <p>As an educationist, I believe in empowering students to choose and create a life they want to live and hence making society better for all. Right education at the right time can make a student achieve anything they want to.</p>
              <p>Gravity's courses have been re-designed to suit the changing times, the temperament of the students and the needs of the gripping syllabus.</p>
              
            </div>
          </Col>
        </Row>
        <p>Our courses cater to all the needs of the aspirants to help them to excel in various competitive as well as Board examinations. Innovative strategies and techniques adopted in our centres, 
                keep our students abreast of the ever-changing pattern of top-level Engineering/Medical entrance exams. As a result, 
                Gravity's time-tested learning formulae are percolating to far-flung areas of India to benefit students from all backgrounds.</p>
              <p>"Our goal is to empower you to fulfil your dreams". Today we rededicate more than four decades of our success to enrich and realize your dreams. I wish all our students a very successful academic year ahead.</p>
              <br/>
        <h3>Who we are ?</h3>
        <br/>
        {/* <p>The Gravity Career Institute is one of best educational conglomerates where over 50,000 teaching & non-teaching faculty provide a world-class education for more than 6,00,000+ students spread across 23 states in India.
          The Gravity Career Institute family is home to flourishing academia with 750+ Schools, Colleges and Coaching Centres and 8 professional colleges. We also run full-fledged institutes for Civil services and correspondence courses to address the vocational goals of career-oriented students.</p> */}
          <p>Today, the Gravity Career Institute stands tall and proud for setting path-breaking benchmarks in academic excellence. Four decades of experience in fulfilling the aspirations of India's students have given us conviction and confidence to aim higher and bigger always. 
            Our students have known the world over for making great strides in intra-national and international competitive examinations and clinching success with top-notch results.</p>
            <p>The Gravity Career Institute family is committed to bringing out the best in every student by imparting a strong educational foundation. Given the dynamic and global nature of education in the 21st century, we are constantly working hard and reinventing ourselves with 
              the ultimate goal of creating an exceptional and enriching environment.</p>
              <br/>
              <h3>Our Vision</h3>
              <p><b>Determination</b></p>
              <p>We are an institution that believes in constantly attempting to achieve both short-term objectives and long-term goals in balanced measure. The Gravity Career Institute strongly emphasizes 
                the true nature of determination in pursuit of the most tangible forms of academic success.</p>
                <p><b>Progress</b></p>
                <p>In realizing our mission, we hold the necessity of progress as paramount. Our direction is futuristic and transitional. 
                  We believe this forward-sightedness plays an instrumental role for any institution to stand firm ground.</p>
                <p><b>Service</b></p>
                <p>To march forward persistently, one's journey must be laden with purpose. The Gravity Career Institute shall continue to utilize material and intellectual resources and evolve a social temperament in the name of service to the nation and humanity at large.</p>
              <br/>
              <h3>Our Mission</h3>
              <p>The Gravity Career Institute is committed to instill well-rounded academic rigour and imbue the zeal for the competition so that one's course of action can lead one to reach the zenith of success meaningfully.</p>
              <p><b>Academic Rigour</b></p>
              <p>To help develop a natural tenacity to grasp academic concepts, master its content, experiment with methodology and apply complex approaches in a meticulous manner.</p>
              <p><b>The Zeal of Competition</b></p>
              <p>We encourage individuals to test scientific knowledge and the extent of its application in the real world, thereby inculcating a competitive spirit that helps one adapt to contemporary challenges.</p>
              <p><b>Zenith of Success</b></p>
              <p>We strive towards achieving the highest peaks in the field of education by addressing aspirations of the hour and career ambitions of the day.</p>


              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
      </Container>
    </section>
  );
};

export default AboutUs;
