import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function BoardWrite() {
  const [board, setBoard] = React.useState({
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
              Hello World
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default BoardWrite;
