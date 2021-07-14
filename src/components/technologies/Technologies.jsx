import React from "react";
import styled from "styled-components";
import TechCard from "./TechCard";
import techData from "./techData";

const Technologies = () => {
  console.log(techData);
  return (
    <Container>
      {techData.map(({ id, cardImg, title }) => (
        <TechCard key={id} name={title} svg={cardImg} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;
  /* background-color: ${(p) => p.theme.backgroundTertiaryColor}; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export default Technologies;
