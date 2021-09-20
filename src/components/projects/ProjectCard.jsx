import React from "react";
import styled from "styled-components";
import devFinderImage from "../../assets/Projects/Devfinder.png";
import rainCityImage from "../../assets/Projects/RainCity.png";

const ProjectCard = () => {
  return (
    <Container>
      <ProjectImageContainer>
        <ProjectImage src={rainCityImage} />
      </ProjectImageContainer>
      <ProjectInfo>
        <Title>RainCity Games</Title>
        <Info>
          This is an e-commerce web application built with Firebase Backend.
          Also, Stripe is implemented as its payment gateway. For the
          deployment, I chose Vercel as my cloud service. In this project, users
          can search for any boardgames, toys and trading cards they like
          through the filter system. This system also allows filtering by price,
          category and name. Users can add/remove items to their cart and place
          orders.
        </Info>
        <a href="https://boardgame-store.vercel.app/" target="__blank">
          RainCity
        </a>
      </ProjectInfo>
      <ProjectImageContainer>
        <ProjectImage src={devFinderImage} />
      </ProjectImageContainer>
      <ProjectInfo>
        <a href="https://developer-finder.vercel.app/" target="__blank">
          DevFinder
        </a>
      </ProjectInfo>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;
const ProjectImage = styled.img`
  height: 25rem;
  width: 30rem;
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width: 80%;
`;

const Info = styled.p`
  font-size: 1rem;
`;

const Title = styled.h1``;

export default ProjectCard;
