import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  primary: "#ffffff",
  secondary: "#000000",
};

const lightTheme = {
  primary: "#fef3c7",
  secondary: "#4a2fbd",
  buttonBg: "#fef3c7",
  headerBg: "#fffbeb",
  left: "3px",
  contrastBg: "#ffcc00",
  projectBg: "#f9f5e9",
};

const darkTheme = {
  primary: "#222222",
  secondary: "#ffcc00",
  buttonBg: "#1e293b",
  headerBg: "#333",
  left: "calc(100% - 27px)",
  contrastBg: "#3b82f6",
  projectBg: "#1e293b",
};

export const getTheme = (mode: Mode) =>
  mode === "dark" ? darkTheme : lightTheme;

export const toggleTheme = (mode: Mode) => (mode === "dark" ? "light" : "dark");

export type Theme = typeof theme;
export type Mode = "light" | "dark";
