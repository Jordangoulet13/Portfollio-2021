import React from "react";
import styled from "styled-components";
import FloatingSquares from "../components/common/FloatingSquares";
import Hero from "../components/hero/Hero";
import Technologies from "../components/technologies/Technologies";

const Home = () => {
  return (
    <BackgroundWrapper>
      <FloatingSquares />
      <Container>
        <Hero />
        <Technologies />
      </Container>
    </BackgroundWrapper>
  );
};

export default Home;

const BackgroundWrapper = styled.div`
  position: relative;
`;

const Container = styled.main`
  margin-left: 5rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;
