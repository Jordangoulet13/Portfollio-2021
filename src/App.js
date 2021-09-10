import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import DarkTheme from "./themes/dark";
import LightTheme from "./themes/light";
import SolarTheme from "./themes/solar";

const App = () => {
  const [theme, setTheme] = useState(LightTheme);
  const [animateSquares, setAnimateSquares] = useState(false);

  const getAnimate = () => {
    setAnimateSquares(!animateSquares);
    console.log(animateSquares);
  };

  const switchTheme = (id) => {
    switch (id) {
      case "DarkTheme":
        setTheme(DarkTheme);
        break;
      case "SolarTheme":
        setTheme(SolarTheme);
        break;
      case "LightTheme":
        setTheme(LightTheme);
        break;
      default:
        setTheme(LightTheme);
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
      <Header animate={getAnimate} />
      <Home isAnimation={animateSquares} />
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
html{
  overflow-x: hidden;
}
body{
  background: ${(p) => p.theme.backgroundPrimaryColor};
  min-height:100vh;
  margin:0;
  color:${(p) => p.theme.textPrimaryColor};
  font-family: "Montserrat";
  font-size: 62.5%;
  box-sizing: border-box;
  overflow-x: hidden;
}



`;

export default App;
