import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <NavMenu>
      <NavLink
        href="https://github.com/Jordangoulet13"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </NavLink>
      <NavLink
        href="https://github.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </NavLink>
      <NavLink
        href="https://github.com/"
        rel="noopener noreferrer"
        target="_blank"
        title="Resume"
      >
        <FontAwesomeIcon icon={faFile} />
      </NavLink>
    </NavMenu>
  );
};

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    margin: 2rem 0 5rem;
  }
`;

const NavLink = styled.a`
  height: 5rem;
  color: ${(p) => p.theme.textTertiaryColor};
  text-decoration: none;
  transition: 600ms;
  font-size: 2.5rem;
  margin-left: 4rem;
  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.textSecondaryColor};
  }

  &:first-child {
    margin: 0;
  }
`;
export default Footer;
