import styled from "styled-components";
import json from "../../json/text.json";

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

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 20;
  li {
    padding: 5px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F69532;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -17px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #32323F;
    }
  }
`;

const RightNav = ({open}) => {
  return (
    <Ul
      open={open}
    >
      {json.header.map((e, index) => {
        return (
          <StyledA href={e.href} key={index}>
            {e.label}
          </StyledA>
        );
      })}
    </Ul>
  );
};

export default RightNav;