import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Style.css";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";

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
        url: `/board/readDetail.do/${seq}`,
      }).then((res) => {
        console.log(res);
        console.log(seq);
        setBoard(res.data);
      });
    }
    getBoardDetail();
  }, [seq]);

  const pageBack = useNavigate();

  function movePage() {
    pageBack("/");
  }

  const deletePage = async () => {
    await axios({
      method: "delete",
      url: `/board/delete.do/${seq}`,
    }).then((res) => {
      console.log(res);
    });
    movePage();
  };

  const modifyPage = async () => {
    const formData = new FormData();
    formData.append("seq", seq);
    formData.append("title", board.title);
    formData.append("writer", board.writer);
    formData.append("content", board.content);

    await axios({
      method: "put",
      url: "/board/update.do/",
      data: formData,
    }).then((res) => {
      console.log(res);
    });
    movePage();
  };

  const onChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="board">
      <Container component={Paper}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Read / Modify
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="writer"
                name="writer"
                label="Writer"
                multiline
                defaultValue={board.writer}
                variant="filled"
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                multiline
                defaultValue={board.title}
                variant="filled"
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <TextField
                id="content"
                name="content"
                label="Content"
                multiline
                defaultValue={board.content}
                variant="filled"
                rows={5}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={deletePage}
            sx={{ mx: 1, my: 2 }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={modifyPage}
            sx={{ mx: 1, my: 2 }}
          >
            Modify
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              pageBack(-1);
            }}
            sx={{ mx: 1, my: 2 }}
          >
            Return
          </Button>
        </React.Fragment>
      </Container>
    </div>
  );
}

export default BoardDetail;
