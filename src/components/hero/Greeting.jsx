import React from "react";
import styled, { keyframes } from "styled-components";

const GreetingText = () => {
  return (
    <Greeting>
      <GreetingContainer>
        <p>Hello</p>
        <GreetingList>
          <li>world !</li>
          <li>boss ?</li>
          <li>users !</li>
          <li>everybody !</li>
        </GreetingList>
      </GreetingContainer>
    </Greeting>
  );
};

const ChangeOpacity = keyframes`
{
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }`;

const ChangeLocation = keyframes`
  
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}`;

const Greeting = styled.div`
  position: absolute;
  overflow: hidden;
  font-size: 3.5rem;
  line-height: 4rem;
  color: ${(p) => p.theme.textPrimaryColor};
`;

const GreetingContainer = styled.div`
  font-weight: 600;
  overflow: hidden;
  height: 4.5rem;
  padding: 0 4rem;

  &:before {
    content: "[";
    left: 0;
  }

  &:after {
    content: "]";
    position: absolute;
    right: 0;
  }

  &:after,
  &:before {
    position: absolute;
    top: 0;

    color: #16a085;
    font-size: 4rem;
    line-height: 4rem;
    animation: ${ChangeOpacity} 2s infinite;
  }
  p {
    display: inline;
    float: left;
    margin: 0;
  }
`;

const GreetingList = styled.ul`
  margin-top: 0;
  padding-left: 11rem;
  text-align: left;
  list-style: none;
  animation: ${ChangeLocation} 10s infinite;

  li {
    line-height: 4rem;
    margin: 0;
  }
`;

export default GreetingText;
