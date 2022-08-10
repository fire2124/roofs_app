import Main from "./components/main/main";
import Header from "./components/headers/navbar";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";
import About from "./components/about_company/about";
import styled from "styled-components";

const Background = styled.div`
  background: #32323f;
  height: 4667px;
`;

function App() {
  return (
    <Background>
      <Header />
      <main>
        <Main />
        <Gallery />
         {/*<About /> */}
      </main>
      {/* <Footer /> */}
    </Background>
  );
}

export default App;
