import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import FloatingSquares from "../components/common/FloatingSquares";
import Hero from "../components/hero/Hero";
import Technologies from "../components/technologies/Technologies";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import TechnologiesSwiper from "../components/technologies/TechnologiesSwiper";

const Home = ({ isAnimation }) => {
  return (
    <BackgroundWrapper>
      <FloatingSquares />
      <Container>
        <Hero />
        <TechnologiesSwiper />
        <Projects />
      </Container>
    </BackgroundWrapper>
  );
};

export default Home;

const moveUp = keyframes`
   0% {
    transform: translateY(0) ;
         
  }


  100% {
   transform: translateY(-30rem);
   
  
            
  }`;

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
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

const SubContainer = styled.div`
  animation: ${(p) =>
    p.animate
      ? css`
          ${moveUp} 4s ease-out 0s 1 normal forwards;
        `
      : ""};
`;
