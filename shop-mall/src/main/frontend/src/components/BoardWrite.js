import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
          <Grid item xs={12}>
            <Button variant="contained" onClick={onClick}>
              OK
            </Button>
            <Button variant="contained" onClick={movePage}>
              Return
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default BoardWrite;
