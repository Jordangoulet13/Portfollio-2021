import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section id="projects">
      <Fade left={true} duration={750} delay={500} distance="50px">
        <Heading>Projects</Heading>
      </Fade>

      <Container>
        <ProjectCard />
      </Container>
    </section>
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
  @media only screen and (max-width: 650px) {
    width: 100%;
    margin-left: 0rem;
  }
`;

export default Projects;
