import React from "react";
import styled, { keyframes } from "styled-components";
import profileImage from "../../assets/JordanGoulet.jpg";
import GreetingText from "./Greeting";

const Hero = () => {
  return (
    <Container>
      <ProfileImage />
      <IntroInfo>
        <GreetingText />
        Welcome to my website, I’m Jordan Goulet. I am passionate about creating
        beautiful design content and implementing into real-life websites.
        Currently working in Vancouver.
      </IntroInfo>
    </Container>
  );
};

const Container = styled.div`
  height: 18rem;
  width: 100%;

  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 600px) {
    margin: 0;
    height: 15rem;
  }
`;

const ProfileImage = styled.div`
  width: 12rem;
  height: 12rem;
  background-image: url(${profileImage});
  background-size: cover;
  background-position: top;
  border: 5px solid ${(p) => p.theme.backgroundPrimaryColor};
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    width: 8rem;
    height: 8rem;
  }
`;

const IntroInfo = styled.span`
  font-size: 1.5rem;
  width: 50%;
  margin-left: 2rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default Hero;
