import styled from "styled-components";
import Burger from "./burger";
import logo from "../../images/logo.svg";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  width: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const StyledNavigationItems = styled.div`
  display: flex;
  margin-left: 60%;
`;


const Header = () => {
  return (
    <StyledNav >
      <a href="/" >
        <img
          src={logo}
          alt="Logo"
          width="200px"
        />
      </a>
      <Burger />
    </StyledNav>
  );
};

export default Header;