import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import DarkTheme from "./themes/dark";
import LightTheme from "./themes/light";
import SolarTheme from "./themes/solar";

const App = () => {
  const [theme, setTheme] = useState(DarkTheme);

  const switchTheme = (id) => {
    switch (id) {
      case "DarkTheme":
        setTheme(DarkTheme);
        break;
      case "LightTheme":
        setTheme(LightTheme);
        break;
      case "SolarTheme":
        setTheme(SolarTheme);
        break;
      default:
        setTheme(DarkTheme);
    }
  };
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: (id) => {
          switchTheme(id);
        },
      }}
    >
      <GlobalStyle />

      <Header />
      <Home />
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
body{
  background: ${(p) => p.theme.backgroundPrimaryColor};
  min-height:100vh;
  margin:0;
  color:${(p) => p.theme.textPrimaryColor};
  font-family: "Open Sans";
  font-size: 62.5%;
  box-sizing: border-box;
}


`;

export default App;
