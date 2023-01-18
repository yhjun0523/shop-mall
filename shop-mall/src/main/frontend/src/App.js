import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import BoardWrite from "./components/BoardWrite";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardDetail from "./components/BoardDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={"/board/list"} element={<Board />}></Route>
          <Route path={"/board/write"} element={<BoardWrite />}></Route>
          <Route
            path={"/board/boardDetail/:seq"}
            element={<BoardDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
