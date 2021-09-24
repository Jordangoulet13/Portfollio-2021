import React from "react";
import styled from "styled-components";
import GreetingText from "./Greeting";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section id="home">
      <Container>
        <IntroInfo>
          <Fade left={true} duration={750} delay={500} distance="50px">
            <GreetingText />
          </Fade>
          <Fade right={true} duration={750} delay={500} distance="50px">
            <HeadingContent>
              <Text>
                Welcome to my website, I’m <span>Jordan Goulet</span>.<br />
                I'm a <span>Full Stack Developer</span>.
              </Text>
              <Text small>
                I’m <span>Jordan Goulet</span>.<br />A{" "}
                <span>Full Stack Developer</span>.
              </Text>
              <NavMenu>
                <NavLink
                  href="https://github.com/Jordangoulet13"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </NavLink>
                <NavLink
                  href="https://www.linkedin.com/in/jordan-goulet-6547b5195/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </NavLink>
                <NavLink
                  href="https://drive.google.com/file/d/14KN6RJrJ5cN5ypawB6DeAP6DoufJwqxg/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Resume"
                >
                  <FontAwesomeIcon icon={faFile} />
                </NavLink>
              </NavMenu>
            </HeadingContent>
          </Fade>
        </IntroInfo>
      </Container>
    </section>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  opacity: 0.8;

  @media only screen and (max-width: 650px) {
    margin: 5rem 0;
    height: 15rem;
    text-align: center;
  }
`;

const Text = styled.div`
  display: ${(p) => (p.small ? "none" : "")};
  @media only screen and (max-width: 650px) {
    display: ${(p) => (p.small ? "block" : "none")};
    font-size: 2rem;
  }
`;

const IntroInfo = styled.span`
  display: flex;
  height: auto;
  flex-direction: column;
  font-size: 1.2rem;
`;

const HeadingContent = styled.h1`
  font-size: 1.5rem;

  span {
    color: ${(p) => p.theme.textTertiaryColor};
  }
`;

const NavMenu = styled.div`
  display: flex;
  height: 20px;
  margin-top: 2rem;
  @media only screen and (max-width: 650px) {
    justify-content: center;
  }
`;

const NavLink = styled.a`
  height: 5rem;
  color: ${(p) => p.theme.textTertiaryColor};
  text-decoration: none;
  transition: 600ms;
  font-size: 2.5rem;
  margin-left: 4rem;
  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.textSecondaryColor};
  }

  &:first-child {
    margin: 0;
  }
`;

export default Hero;
