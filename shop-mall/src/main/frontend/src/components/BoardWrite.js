import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import { Container } from "@mui/system";

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
  };

  const onChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    });
  };

  const pageBack = useNavigate();

  return (
    <div>
      <Container>
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
                onChange={onChange}
                label="Required"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="title"
                name="title"
                onChange={onChange}
                label="Required"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="content"
                name="content"
                label="Content"
                multiline
                onChange={onChange}
                rows={4}
              />
            </Grid>
          </Grid>
          <div className="bottom_button">
            <Button variant="contained" onClick={onClick}>
              OK
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                pageBack(-1);
              }}
            >
              Return
            </Button>
          </div>
        </React.Fragment>
      </Container>
    </div>
  );
}

export default BoardWrite;
