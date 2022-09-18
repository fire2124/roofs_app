import styled from "styled-components";
import Burger from "./burger";
import logo from "../../images/logo.svg";
import { mobileMax } from "../responsiveness";

const StyledNav = styled.nav`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  position: fixed;
  z-index: 203;
  background: #343441;
  .logo {
    padding: 15px 0;
  }
  @media (min-width: 300px) and (max-width: 832px) {
    justify-content: start;
    padding: 5px 20px 20px;
  }
`;

const StyledA = styled.a`
  width:50%;
  display: flex;
  justify-content: start;
`

const StyledImg = styled.img`
  padding: 5px 0;

`;

const Header = () => {
  return (
    <StyledNav id="navbar">
      <StyledA href="/">
        <StyledImg src={logo} alt="Logo" width="200px" height="100%" />
      </StyledA>
      <Burger />
    </StyledNav>
  );
};

export default Header;
