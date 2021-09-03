import React from "react";
import styled from "styled-components";
import devFinderImage from "../../assets/Projects/Devfinder.png";
import rainCityImage from "../../assets/Projects/RainCity.png";

const ProjectCard = () => {
  return (
    <Container>
      <ProjectImageContainer>
        <ProjectImage src={devFinderImage} />
      </ProjectImageContainer>
      <ProjectInfo>
        <a href="https://developer-finder.vercel.app/" target="__blank">
          DevFinder
        </a>
      </ProjectInfo>
      <ProjectImageContainer>
        <ProjectImage src={rainCityImage} />
      </ProjectImageContainer>
      <ProjectInfo>
        <a href="https://boardgame-store.vercel.app/" target="__blank">
          RainCity
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
`;

export default ProjectCard;
