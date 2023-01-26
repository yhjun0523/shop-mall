import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";

function BoardWrite() {
  const [board, setBoard] = useState({
    writer: "",
    title: "",
    content: "",
  });

  const onClick = async () => {
    await axios({
      method: "post",
      url: "/board/write.do",
      data: board,
      headers: { "Content-Type": "multipart/form-data" },
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

  const pageBack = useNavigate();

  function movePage() {
    pageBack("/");
  }

  return (
    <div className="board">
      <Container component={Paper}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Write
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="writer"
                name="writer"
                onChange={onChange}
                label="Writer"
                fullWidth="true"
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="title"
                name="title"
                onChange={onChange}
                label="Title"
                fullWidth="true"
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
                required
                onChange={onChange}
                rows={5}
                fullWidth="true"
              />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Button variant="contained" onClick={onClick} sx={{ mx: 1, my: 2 }}>
            OK
          </Button>
          <Button
            variant="contained"
            sx={{ mx: 1, my: 2 }}
            onClick={() => {
              pageBack(-1);
            }}
          >
            Return
          </Button>
        </React.Fragment>
      </Container>
    </div>
  );
}

export default BoardWrite;
