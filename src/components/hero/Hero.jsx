import React from "react";
import styled, { keyframes } from "styled-components";
import heroImg from "../../assets/hero-image.jpg";
import GreetingText from "./Greeting";

const Hero = () => {
  return (
    <Container>
      <GreetingText />
    </Container>
  );
};

const Container = styled.div`
  height: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
    to top,
    ${(p) => p.theme.backgroundPrimaryColor}00,
    ${(p) => p.theme.backgroundTertiaryColor}FF
  );
`;

export default Hero;
