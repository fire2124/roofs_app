import Main from "./components/main/main";
import Header from "./components/headers/navbar";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";
import About from "./components/about_company/about";
import styled from "styled-components";
import { mobileMax } from "./components/responsiveness";

const Background = styled.div`
  background: #32323f;
  height: 4500px;
  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    height: 3396px;
  }
`;

const BackgroundSection = styled.main`
  background: #e2dfdc;

  @media (min-width: 300px) and (max-width: ${mobileMax}px) {
    background: #32323f;
  }
`;

function App() {
  return (
    <Background>
      <Header />
      <BackgroundSection>
        <Main />
        {/* <Gallery /> */}
        <About />
      </BackgroundSection>
      {/* <Footer /> */}
    </Background>
  );
}

export default App;
