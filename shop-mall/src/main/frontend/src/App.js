import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoardWrite from "./components/BoardWrite";
import * as React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <BoardWrite />
      <Footer />
    </div>
  );
}

export default App;
