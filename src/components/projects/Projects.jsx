import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <Container>
        <ProjectCard />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Heading = styled.h1`
  color: ${(p) => p.theme.textTertiaryColor};
  margin-left: 5rem;
  font-size: 2rem;
  border-bottom: 1px solid;
  width: 85%;
`;

export default Projects;
