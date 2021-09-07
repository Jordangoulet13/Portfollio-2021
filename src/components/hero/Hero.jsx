import React from "react";
import styled, { keyframes, css } from "styled-components";
import profileImage from "../../assets/JordanGoulet.jpg";
import GreetingText from "./Greeting";

const Hero = () => {
  return (
    <Container>
      <IntroInfo>
        <CursiveText html>{"<html>"}</CursiveText>
        <CursiveText pretty bottom>
          {"<body>"}
        </CursiveText>
        <HeadingContainer>
          <CursiveText>{"<h1>"}</CursiveText>
          <GreetingText />
          <HeadingContent>
            Welcome to my website, I’m Jordan Goulet. I am passionate about
            creating beautiful design content and implementing into real-life
            websites. Currently working in Vancouver.
          </HeadingContent>

          <CursiveText>{"</h1>"}</CursiveText>
        </HeadingContainer>
        <CursiveText pretty top>
          {"</body>"}
        </CursiveText>
        <CursiveText pretty html>
          {"</html>"}
        </CursiveText>
      </IntroInfo>
      <ProfileImage />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;

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
  width: 50%;
  height: 90%;
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
  display: flex;
  height: auto;
  flex-direction: column;
  font-size: 1.2rem;
  width: 50%;
  margin-left: 2rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const CursiveText = styled.span`
  font-family: "Dancing Script";
  font-size: 2rem;
  color: ${(p) => p.theme.textTertiaryColor};
  opacity: 0.7;
  margin-left: ${(p) => (p.html ? "0" : "2rem")};
  ${(p) =>
    p.pretty
      ? css`
          margin-top: ${(p) => (p.top ? "5rem" : "0")};
          margin-bottom: ${(p) => (p.bottom ? "5rem" : "0")};
        `
      : css`
          margin: 0;
        `};
`;

const HeadingContainer = styled.div`
  margin-left: 5rem;
`;
const HeadingContent = styled.h1`
  font-size: 1.5rem;
`;

const BigJ = styled.div``;

export default Hero;
