import React from "react";
import styled from "styled-components";
import FloatingSquares from "../components/common/FloatingSquares";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <FloatingSquares />
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.main`
  margin-left: 5rem;
  overflow: auto;
  display: flex;

  justify-content: center;
`;
