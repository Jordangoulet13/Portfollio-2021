import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import TechCard from "./TechCard";
import techData from "./techData";

const Technologies = ({ animate }) => {
  return (
    <Container animate={animate}>
      {techData.map(({ id, cardImg, title }) => (
        <TechCard
          key={id}
          name={title}
          svg={cardImg}
          animate={animate}
          num={id}
        />
      ))}
    </Container>
  );
};
const rotate = keyframes`
   0% {
    transform: scale(1) ;
          opacity: 1;
  }

  50%{
    opacity: 0;
  }

  100% {
   transform: scale(0) ;
   opacity: 0;
  
            
  }`;

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${(p) => p.theme.backgroundTertiaryColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-x: hidden;
  animation: ${(p) =>
    p.animate
      ? css`
          ${rotate} 7s ease-out 0s 1 normal forwards;
        `
      : ""};
`;
export default Technologies;
