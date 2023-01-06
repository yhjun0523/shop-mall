import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [seq, setSeq] = useState();
  const [writer, setWriter] = useState();

  useEffect(() => {
    fetch("/board")
      .then(response => {
        return response.json();
      })
      .then(seq => {
        setSeq(seq);
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
        <p>
          {seq}
        </p>
      </header>
    </div>
  );
}

export default App;
