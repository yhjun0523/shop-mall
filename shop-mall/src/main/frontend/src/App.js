import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    axios.get("/board").then((response) => {
      setBoard(response.data);
    });
  }, []);

  if (board) {
    const boardList = () => {
      const newArr = [];
      for (let i = 0; i < board.length; i++) {
        newArr.push(
          <p key={board[i].seq}>
            {board[i].seq}&nbsp;
            {board[i].title}&nbsp;
            {board[i].writer}&nbsp;
            {board[i].content}&nbsp;
            {board[i].regDate}
            <br />
          </p>
        );
      }
      return newArr;
    };

    return (
      <div className="App">
        <header className="App-header">
          {console.log(board)}
          <div>{boardList()}</div>
        </header>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
