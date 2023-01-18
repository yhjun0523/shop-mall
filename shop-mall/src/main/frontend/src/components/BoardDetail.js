import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BoardDetail() {
  const { seq } = useParams();

  const [board, setBoard] = useState({
    writer: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    async function getBoardDetail() {
      await axios({
        method: "post",
        url: "/board/readDetail.do/" + seq,
      }).then((res) => {
        console.log(res);
        console.log(seq);
        setBoard(res.data);
      });
    }
    getBoardDetail();
  }, []);

  const listPage = useNavigate();

  function movePage() {
    listPage("/board/list");
  }

  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Write
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="writer"
              name="writer"
              label="Writer"
              multiline
              defaultValue={board.writer}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              multiline
              defaultValue={board.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              name="content"
              label="Content"
              multiline
              defaultValue={board.content}
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={movePage}>
              Return
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default BoardDetail;
