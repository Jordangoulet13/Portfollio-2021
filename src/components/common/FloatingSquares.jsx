import React from "react";
import styled, { keyframes } from "styled-components";

const FloatingSquares = () => {
  return (
    <BubbleList>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
      <Bubbles></Bubbles>
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
  width: 5rem;
  height: 5rem;
  opacity: 0.15;
  background-color: ${(p) => p.theme.textSecondaryColor};
  bottom: -15rem;
  animation: ${square} 25s infinite linear;

  &:nth-child(1) {
    left: 10%;
  }
  &:nth-child(2) {
    left: 20%;
    width: 180px;
    height: 180px;
    animation-delay: 2s;
    animation-duration: 17s;
  }
  &:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }
  &:nth-child(4) {
    left: 40%;
    width: 260px;
    height: 260px;
    animation-duration: 22s;
    opacity: 0.25;
    background-color: ${(p) => p.theme.textSecondaryColor};
  }
  &:nth-child(5) {
    left: 70%;
  }
  &:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    animation-delay: 3s;
    opacity: 0.2;
    background-color: ${(p) => p.theme.textSecondaryColor};
  }
  &:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    animation-delay: 7s;
  }
  &:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 15s;
    animation-duration: 40s;
  }
  &:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    animation-duration: 40s;
    opacity: 0.3;
    background-color: ${(p) => p.theme.textSecondaryColor};
  }
  &:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    animation-delay: 11s;
  }
  &:nth-child(11) {
    left: -20%;
    width: 140px;
    height: 140px;
    animation-delay: 8s;
    animation-duration: 30s;
  }
  &:nth-child(12) {
    left: -30%;
    width: 220px;
    height: 220px;
    animation-delay: 2s;
    animation-duration: 15s;
  }
`;

export default FloatingSquares;
