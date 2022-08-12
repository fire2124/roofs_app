import styled from "styled-components";
import json from "../../json/text.json";

const StyledA = styled.a`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.035em;
  font-variant: small-caps;
  font-feature-settings: 'pnum' on, 'lnum' on, 'case' on;
  color: #ffffff;
  text-decoration: none;
  margin-left: 0.1%;
  display: flex;
  white-space: nowrap;
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
    height: 210px;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #32323F;
    }
  }
`;

const StyledLi = styled.li`
    margin-left: 33%;
    margin-top: 3%;
`;

const RightNav = ({ open }) => {
  return (
    <Ul
      open={open}
    >
      {json.header.map((e, index) => {
        return (
          <StyledLi key={index}><StyledA href={e.href} key={index}>
            {e.label}
          </StyledA></StyledLi>

        );
      })}
    </Ul>
  );
};

export default RightNav;