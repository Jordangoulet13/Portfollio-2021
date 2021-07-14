import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <AboutText>
        💻 Software development I’m developing web apps using HTML5, CSS3, SCSS,
        JavaScript, React, and Redux. Especially I’ve been putting much effort
        into developing with React. I keep brushing up my developing skills.
      </AboutText>
      <AboutText>
        🧩 Thinking new ideas I always take notes whatever grabs my attention,
        which make me come up with new idea for web apps. It also useful for
        solving problems even if it's a tiny one. Everything around me is hints
        for solving problems.
      </AboutText>
      <AboutText>
        🍳 Cooking I’m a good cooker. I can make a variety of food within
        limited ingredients. It’s like a puzzle. I love to try new taste so
        every time I face new meal I can get new hint to my recipe lists. The
        way of thinking helps me when I am coding as well.
      </AboutText>
      <AboutText>
        🌎 Traveling Love to off to new world! Of all the countries I have
        visited, Laos and Vietnam are my favorite!
      </AboutText>
    </Container>
  );
};

export default About;

const Container = styled.div`
  background-color: ${(p) => p.theme.backgroundTertiaryColor};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-start;
`;

const AboutText = styled.span`
  padding: 2rem;
  display: inline-block;
  font-size: 1.1rem;
`;
