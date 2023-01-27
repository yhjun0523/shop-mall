import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import Login from "./components/Login";
import BoardWrite from "./components/BoardWrite";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BoardDetail from "./components/BoardDetail";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
});

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={"/"} element={<Board />}></Route>
          <Route path={"/board/write"} element={<BoardWrite />}></Route>
          <Route
            path={"/board/boardDetail/:seq"}
            element={<BoardDetail />}
          ></Route>
          <Route path={"/member/login"} element={<Login />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
