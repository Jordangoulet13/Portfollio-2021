import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container>
      <ProjectCard />
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${(p) => p.theme.backgroundSecondaryColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Projects;
