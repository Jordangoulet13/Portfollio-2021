import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import devFinderImage from "../../assets/Projects/Devfinder.png";
import rainCityImage from "../../assets/Projects/RainCity.png";
import crwnClothing from "../../assets/Projects//crwnClothing.png";

const ProjectCard = () => {
  return (
    <Container>
      <Fade left={true} duration={1000} delay={500} distance="30px">
        <ProjectImageContainer>
          <ProjectImage src={rainCityImage} />
        </ProjectImageContainer>

        <ProjectInfo>
          <Title>RainCity Games</Title>
          <span>React App</span>
          <Info>
            This is an e-commerce web application built with a Firebase Backend.
            Also, Stripe was implemented as its payment gateway. For the
            deployment, I chose Vercel as my hosting service. In this project,
            users can search for any boardgames, toys and trading cards they
            like through the filter system. This system also allows filtering by
            price, category and name. Users can add/remove items to their cart
            and place orders.
          </Info>
          <LinksContainer>
            <a href="https://boardgame-store.vercel.app/" target="__blank">
              <Info>Live Site</Info>
            </a>
            <a
              href="https://github.com/Jordangoulet13/boardgame-store"
              target="__blank"
            >
              <Info>Github</Info>
            </a>
          </LinksContainer>
        </ProjectInfo>
      </Fade>

      <Fade right={true} duration={1000} delay={500} distance="30px">
        <ProjectImageContainer>
          <ProjectImage src={devFinderImage} />
        </ProjectImageContainer>
        <ProjectInfo>
          <Title>DevFinder</Title>
          <span>React App</span>
          <Info>
            DevFinder is a full-stack application that allows employers and
            future employees to connect and share information. This CRUD app
            allows users to post information about themselves along side images
            they choose to upload. Utilizes Oauth and google sign-in to create a
            personalized site for the user.
          </Info>
          <LinksContainer>
            <a href="https://developer-finder.vercel.app/" target="__blank">
              <Info>Live Site</Info>
            </a>
            <a
              href="https://github.com/Jordangoulet13/developer-finder"
              target="__blank"
            >
              <Info>Github</Info>
            </a>
          </LinksContainer>
        </ProjectInfo>
      </Fade>

      <Fade left={true} duration={1000} delay={500} distance="30px">
        <ProjectImageContainer>
          <ProjectImage src={crwnClothing} />
        </ProjectImageContainer>

        <ProjectInfo>
          <Title>CRWN Clothing</Title>
          <span>React App</span>
          <Info>
            An e-commerce clothing store that allows users to create an account
            and make purchases. Created using React front-end along side redux.
            This store also conencts to the stripe api to make payments using a
            demo account.
          </Info>

          <LinksContainer>
            <a
              href="https://crwn-clothing-six-theta.vercel.app/"
              target="__blank"
            >
              <Info>Live Site</Info>
            </a>
            <a
              href="https://github.com/Jordangoulet13/clothing-store"
              target="__blank"
            >
              <Info>Github</Info>
            </a>
          </LinksContainer>
        </ProjectInfo>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;
const ProjectImage = styled.img`
  height: 25rem;
  width: 30rem;
  @media only screen and (max-width: 650px) {
    width: 25rem;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 80%;
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

const Info = styled.p`
  font-size: 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 650px) {
    justify-content: center;
  }
  a {
    text-decoration: none;
    border: 1px solid ${(p) => p.theme.textTertiaryColor};
    padding: 0 1rem;
    text-align: center;
    color: ${(p) => p.theme.textPrimaryColor};
    transition: 600ms;
    border-radius: 5px;
    @media only screen and (max-width: 650px) {
      background-color: ${(p) => p.theme.textTertiaryColor};
    }

    &:hover {
      background-color: ${(p) => p.theme.textTertiaryColor};
      opacity: 0.8;
    }
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
`;

export default ProjectCard;
