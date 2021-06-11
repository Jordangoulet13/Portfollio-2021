import React from "react";
import styled from "styled-components";

const TechCard = ({ svg, name }) => {
  console.log(svg);
  return (
    <Container>
      <ImageContainer>{svg}</ImageContainer>
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const ImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  @media only screen and (max-width: 600px) {
    width: 5rem;
    height: 5rem;
  }
`;

const Name = styled.span`
  font-size: 2rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default TechCard;
