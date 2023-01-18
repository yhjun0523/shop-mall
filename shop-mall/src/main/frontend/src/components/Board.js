import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";

function Board() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    axios.get("/board/read.do").then((response) => {
      setBoard(response.data);
    });
  }, []);

  const writePage = useNavigate();

  function movePage() {
    writePage("/board/write");
  }

  if (board) {
    return (
      <div>
        <React.Fragment>
          {/* <Title>Recent Orders</Title> */}
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Seq</TableCell>
                <TableCell>Writer</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>RegDate</TableCell>
                <TableCell align="right">Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {board.map((boardList) => (
                <TableRow key={boardList.seq}>
                  <TableCell>{boardList.seq}</TableCell>
                  <TableCell>{boardList.writer}</TableCell>
                  <TableCell>
                    <Link to={`/board/boardDetail/${boardList.seq}`}>
                      {boardList.title}
                    </Link>
                  </TableCell>
                  <TableCell>{boardList.regDate}</TableCell>
                  <TableCell align="right">{boardList.cnt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
        {console.log(board)}
        <br />
        <Button variant="contained" onClick={movePage}>
          Write
        </Button>
      </div>
    );
  } else {
    return null;
  }
}

export default Board;
