import React from "react";
import styled from "styled-components";
import FloatingSquares from "../components/common/FloatingSquares";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import TechnologiesSwiper from "../components/technologies/TechnologiesSwiper";
import Footer from "../components/footer/Footer";

const Home = ({ isAnimation }) => {
  return (
    <BackgroundWrapper>
      <FloatingSquares />
      <Container>
        <Hero />
        <TechnologiesSwiper />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </BackgroundWrapper>
  );
};

export default Home;

const BackgroundWrapper = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.backgroundTertiaryColor};
  background: linear-gradient(
    to bottom,
    ${(p) => p.theme.backgroundPrimaryColor}00,
    ${(p) => p.theme.backgroundSecondaryColor}FF
  );
`;

const Container = styled.main`
  margin-left: 5rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media only screen and (max-width: 650px) {
    margin: 0 1rem;
  }
`;
