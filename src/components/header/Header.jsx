import styled, { css, keyframes, ThemeContext } from "styled-components";
import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faCat,
  faBookOpen,
  faChartBar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ animate }) => {
  const { setTheme } = useContext(ThemeContext);

  const [currentTheme, setCurrentTheme] = useState("DarkTheme");
  const handleThemeChange = () => {
    if (currentTheme === "DarkTheme") {
      setCurrentTheme("SolarTheme");
      setTheme(currentTheme);
    } else if (currentTheme === "LightTheme") {
      setCurrentTheme("DarkTheme");
      setTheme(currentTheme);
    } else {
      setTheme(currentTheme);
      setCurrentTheme("LightTheme");
    }
  };

  return (
    <NavMenu>
      <ul>
        <NavItem logo>
          <Link to="home" smooth duration={1000}>
            <NavLink>
              <span className="link-text logo">Jordan Goulet</span>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                size="2x"
                className="logoSVG"
              />
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth duration={1000}>
            <NavLink>
              <FontAwesomeIcon icon={faBookOpen} />
              <span className="link-text">Technologies</span>
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth duration={1000}>
            <NavLink>
              <FontAwesomeIcon icon={faChartBar} />
              <span className="link-text">Projects</span>
            </NavLink>{" "}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth duration={1000}>
            <NavLink>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="link-text">Contact</span>
            </NavLink>
          </Link>
        </NavItem>

        <NavItem onClick={handleThemeChange}>
          <NavLink>
            <FontAwesomeIcon icon={faCat} />
            <span className="link-text">Themify</span>
          </NavLink>
        </NavItem>
      </ul>
    </NavMenu>
  );
};

const moveInLeft = keyframes`    0% {
  opacity: 0;
  transform: translate(-15rem);
}
100% {
  opacity: 1;
  transform: translate(0);
}`;

const NavMenu = styled.nav`
  position: fixed;
  background-color: ${(p) => p.theme.backgroundSecondaryColor};
  transition: width 600ms ease;
  width: 5rem;
  height: 100vh;
  z-index: 999;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    &:hover {
      width: 15rem;
      .link-text {
        display: inline;
        left: 0;
        opacity: 1;
        transition: opacity 1s;
      }
      .logo {
        margin-left: 0;
        font-size: 0.9rem;
        animation: ${moveInLeft} 1s ease-out;
      }
      .logoSVG {
        margin-left: 10rem;
        transform: rotate(-180deg);
        transition: all 1s;
      }
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 5rem;
    width: 100vw;
    bottom: 0;
  }
`;

const NavItem = styled.li`
  width: 100%;

  :nth-child(5) {
    margin-top: auto;
    @media only screen and (max-width: 650px) {
      margin-top: 0;
    }
  }

  ${(p) =>
    p.logo
      ? css`
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: ${(p) => p.theme.textPrimaryColor};
          letter-spacing: 0.3ch;
          width: 100%;
          .link-text {
            font-size: 1rem;
            margin-right: 1rem;
            position: absolute;
            opacity: 0;
          }
          svg {
            transform: rotate(0deg);
            transition: transform 600ms;
          }
          @media only screen and (max-width: 650px) {
            margin-bottom: 0;
            display: none;
          }
        `
      : ""}
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${(p) => p.theme.textPrimaryColor};
  text-decoration: none;
  filter: grayscale(100%) opacity(0.5);
  transition: 600ms;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  @media only screen and (max-width: 650px) {
    justify-content: space-around;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    filter: grayscale(0%) opacity(1);
    background: ${(p) => p.theme.backgroundSecondaryColor};
    color: ${(p) => p.theme.textSecondaryColor};
  }
  span {
    display: none;
    margin-left: 1.5rem;
    font-size: 1rem;
  }
`;

export default Header;
