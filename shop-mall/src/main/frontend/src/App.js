import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [board, setBoard] = useState({});

  useEffect(() => {
    axios.get("/board").then((response) => {
      setBoard(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {console.log(board[0])}
        <p>{JSON.stringify(board[0])}</p>
      </header>
    </div>
  );
}

export default App;
