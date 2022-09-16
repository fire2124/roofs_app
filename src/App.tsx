import { useState, useEffect } from "react";
import json from "./json/text.json";
import Main from "./components/main/main";
import Header from "./components/headers/navbar";
import Gallery from "./components/gallery/gallery";
import Footer from "./components/footer/footer";
import About from "./components/about_company/about";
import styled from "styled-components";
import { mobileMax } from "./components/responsiveness";


const Background = styled.div`
  background: #32323f;
  height: 100%;
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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState([] as any);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    const value = json.main.house_text.map((e: any) => {
      const value =
        document.getElementById(e.href) !== undefined &&
        document.getElementById(e.href) !== null
          ? document.getElementById(e.href)
          : null;
      if (value !== null) {
        return value.clientHeight;
      } else return null;
    });
    setHeight(value);
  }, []);
  
  return (
    <Background>
      <Header />
      <BackgroundSection>
        <Main width={width} height={height} />
        <Gallery width={width}/>
        <About />
        <Footer />
      </BackgroundSection>
    </Background>
  );
}

export default App;
