import styled from "styled-components";
import Burger from "./burger";
import logo from "../../images/logo.svg";
import {mobileMax} from "../responsiveness"

const StyledNav = styled.nav`
  width: 70%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  @media (max-width: ${mobileMax}px) {
    padding: 5px 20px 20px;
  }
`;

const StyledImg = styled.img`
  padding: 5px 0;

  @media (min-width: 1600px) {
    margin-left: 100%;
  }
`;

const Header = () => {
  return (
    <StyledNav>
      <a href="/">
        <StyledImg src={logo} alt="Logo" width="200px" height="100%" />
      </a>
      <Burger />
    </StyledNav>
  );
};

export default Header;
