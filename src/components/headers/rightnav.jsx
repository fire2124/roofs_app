import styled from "styled-components";
import json from "../../json/text.json";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 20;
  li {
    padding: 5px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #343441;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -17px;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #FFFFFF;
    }
  }
`;

const StyledLi = styled.li`
    margin-left: 10%;
    margin-top: 3%;
`;

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

const StyledA2 = styled(StyledA)`
    color: #F79532 !important;
`

const StyledA3 = styled(StyledA)`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  font-variant: normal;
  font-feature-settings: 'case' on;
  white-space:  normal !important;
`

const StyledUl = styled.ul`
  list-style: none;
  margin-top: 10%;
  margin-left: -44%;
`
const StyledLi2 = styled.li`
    margin-left: 10%;
    margin-top: 3%;
`;


const RightNav = ({ open,setOpen }) => {
  return (
    <Ul
      open={open}
    >
      {json.header.map((e, index) => {
        return (
          <StyledLi key={index}>
            {index === 2 ?
              <StyledA2 href={`#${e.href}`} key={index} onClick={() => setOpen(!open)}>
                {e.label}
              </StyledA2> :
              <StyledA href={`#${e.href}`} key={index} onClick={() => setOpen(!open)}>
                {e.label}
                {open === true && window.innerWidth < 768 ? <StyledUl>
                  {e.child ? e.child.map((child, index2) =>
                    <StyledLi2 key={index}>
                      <StyledA3 href={`#${child.href}`} key={index2} onClick={() => setOpen(!open)}>
                        {child.label}
                      </StyledA3>
                    </StyledLi2>) : null}
                </StyledUl>
                  : null}
              </StyledA>
            }
          </StyledLi>
        );
      })}
    </Ul>
  );
};

export default RightNav;