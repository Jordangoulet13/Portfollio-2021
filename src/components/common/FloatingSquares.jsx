import React from "react";
import styled, { keyframes } from "styled-components";
import techData from "../technologies/techData.js";

const FloatingSquares = () => {
  return (
    <BubbleList>
      {techData.map(({ id, cardImg, title }) => (
        <Bubbles key={id} name={title}>
          {cardImg}
        </Bubbles>
      ))}
    </BubbleList>
  );
};

const square = keyframes`
   0% {
            transform: translateY(0);
  }
  100% {
            transform: translateY(-150rem) rotate(600deg);
  }`;

const BubbleList = styled.ul`
  background: ${(p) => p.theme.backgroundPrimaryColor};
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: -999;
`;

const Bubbles = styled.li`
  position: absolute;
  list-style: none;
  display: block;
  width: 7rem;
  height: 7rem;
  opacity: 0.15;
  bottom: -15rem;
  animation: ${square} 25s infinite linear;

  &:nth-child(1) {
    left: 10%;
  }
  &:nth-child(2) {
    left: 20%;
    width: 18rem;
    height: 18rem;
    animation-delay: 2s;
    animation-duration: 17s;
  }
  &:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }
  &:nth-child(4) {
    left: 40%;
    width: 15rem;
    height: 15rem;
    animation-duration: 22s;
    opacity: 0.25;
  }
  &:nth-child(5) {
    width: 16rem;
    height: 16rem;
    left: 70%;
  }
  &:nth-child(6) {
    left: 80%;
    width: 9rem;
    height: 9rem;
    animation-delay: 3s;
    opacity: 0.2;
  }
  &:nth-child(7) {
    left: 50%;
    width: 14rem;
    height: 14rem;
    animation-delay: 7s;
  }
  &:nth-child(8) {
    left: 55%;
    width: 6rem;
    height: 6rem;
    animation-delay: 15s;
    animation-duration: 40s;
  }
  &:nth-child(9) {
    left: 25%;
    width: 15rem;
    height: 15rem;
    animation-delay: 2s;
    animation-duration: 40s;
    opacity: 0.3;
  }
  &:nth-child(10) {
    left: 90%;
    width: 13rem;
    height: 13rem;
    animation-delay: 11s;
  }
  &:nth-child(11) {
    left: -20%;
    width: 14rem;
    height: 14rem;
    animation-delay: 8s;
    animation-duration: 30s;
  }
  &:nth-child(12) {
    left: -30%;
    width: 17rem;
    height: 17rem;
    animation-delay: 2s;
    animation-duration: 15s;
  }
`;

export default FloatingSquares;
