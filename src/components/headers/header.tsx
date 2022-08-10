import json from "../../json/text.json";
import logo from "../../images/logo.svg";
import styled from "styled-components";

const StyledA = styled.a`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on, "case" on;
  color: #ffffff;
  text-decoration: none;
  margin-left: 0.1%;
  display: flex;
`;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
`;

const StyledNavigationItems = styled.div`
  display: flex;
  margin-left: 60%;
`;

function Header() {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <StyledNavigationItems>
        {json.header.map((e: any, index: number) => {
          return (
            <StyledA href={e.href} key={index}>
              {e.label}
            </StyledA>
          );
        })}
      </StyledNavigationItems>
    </StyledNav>
  );
}

export default Header;
