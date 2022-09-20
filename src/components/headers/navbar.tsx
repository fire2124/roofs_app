import styled from "styled-components";
import Burger from "./burger";
import logo from "../../images/logo.svg";

const StyledNav = styled.nav`
  width: 100%;
  padding: 0px 15px;
  display: flex;
  position: fixed;
  z-index: 203;
  background: #343441;
  .logo {
    padding: 15px 0;
  }

  @media (min-width: 300px) and (max-width: 832px) {
    justify-content: space-between;
    padding: 0px;
    padding-top: 2.5%;
    width: 95%;
    padding-left: 5%;
    padding-bottom: 4%;

  }

`;

const StyledA = styled.a`
  width:50%;
  display: flex;
  justify-content: start;
  @media (min-width: 1600px) {
    margin-left:8%;

  }
`

const StyledImg = styled.img`
  padding: 5px 0;

`;

const Header = () => {
  return (
    <StyledNav>
      <StyledA href="/">
        <StyledImg src={logo} alt="Logo" width="200px" height="100%" />
      </StyledA>
      <Burger />
    </StyledNav>
  );
};

export default Header;
