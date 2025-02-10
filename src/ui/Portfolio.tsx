import React, { useState } from "react";
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";
import styled from "styled-components";
import { StylesProvider } from "./StylesProvider";
import { getTheme, Mode, toggleTheme } from "../domain/theme";
import { ModeToggle } from "./ModeToggle";

// #region styled components
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 3px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.headerBg};
  border-radius: 15px;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1.5px;
  flex-wrap: wrap;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  border-top: 2px dashed ${(props) => props.theme.secondary};
  padding: 10px;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1.5px;
`;

const Main = styled.main`
display: flex;
gap: 16px;
padding: 8px;
flex-wrap: wrap;
`
// #endregion

export const Portfolio: React.FC = () => {
  const [mode, setMode] = useState<Mode>("light");

  return (
    <StylesProvider theme={getTheme(mode)}>
      <Container>
        <Header>
          <h2>Mi Portfolio</h2>
          <ModeToggle
            mode={mode}
            onToggle={() => setMode(toggleTheme(mode))}
          />
        </Header>
        <Main>
          <AboutMe />
          <Projects />
        </Main>
        <Footer>
          <p>&copy; 2025 RC Alum</p>
        </Footer>
      </Container>
    </StylesProvider>
  );
};
