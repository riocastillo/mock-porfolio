import React, { FC, PropsWithChildren } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "../domain/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    height: 100vh;
    padding: 10px 100px;
    overflow: hidden;
  }
`;

export const Title = styled.h2`
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1.5px;
`;

type Props = {
  theme: Theme;
}

export const StylesProvider: FC<PropsWithChildren<Props>> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>);
};
