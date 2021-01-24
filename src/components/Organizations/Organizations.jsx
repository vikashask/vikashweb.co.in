import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Organizations = () => {
  const { organization } = useContext(PortfolioContext);
  console.log('🚀 ~ file: Organizations.jsx ~ line 9 ~ Organizations ~ organization', organization);
  // const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                {/* <AboutImg alt="profile picture" filename={img} /> */}
                Image
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                  animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Organizations;
